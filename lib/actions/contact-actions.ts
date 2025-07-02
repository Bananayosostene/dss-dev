"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type FormState = {
  success: boolean;
  message: string;
  error: string;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields",
        message: "",
      };
    }

    await prisma.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        message: message.trim(),
      },
    });

    revalidatePath("/admin");

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      error: "",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
      message: "",
    };
  }
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return messages;
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return [];
  }
}

export async function markMessageAsRead(messageId: string) {
  try {
    await prisma.contactMessage.update({
      where: { id: messageId },
      data: { isRead: true },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error marking message as read:", error);
    return { success: false, error: "Failed to mark message as read" };
  }
}

export async function deleteContactMessage(messageId: string) {
  try {
    await prisma.contactMessage.delete({
      where: { id: messageId },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting message:", error);
    return { success: false, error: "Failed to delete message" };
  }
}

export async function getMessageStats() {
  try {
    const [total, unread, todayCount] = await Promise.all([
      prisma.contactMessage.count(),
      prisma.contactMessage.count({
        where: { isRead: false },
      }),
      prisma.contactMessage.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
    ]);

    return {
      total,
      unread,
      read: total - unread,
      today: todayCount,
    };
  } catch (error) {
    console.error("Error fetching message stats:", error);
    return {
      total: 0,
      unread: 0,
      read: 0,
      today: 0,
    };
  }
}

export async function searchContactMessages(
  searchTerm = "",
  filterStatus: "all" | "read" | "unread" = "all"
): Promise<ContactMessage[]> {
  try {
    const whereClause: any = {};

    if (searchTerm) {
      whereClause.OR = [
        { name: { contains: searchTerm, mode: "insensitive" } },
        { email: { contains: searchTerm, mode: "insensitive" } },
        { message: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    if (filterStatus === "read") {
      whereClause.isRead = true;
    } else if (filterStatus === "unread") {
      whereClause.isRead = false;
    }

    const messages = await prisma.contactMessage.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    });

    return messages;
  } catch (error) {
    console.error("Error searching contact messages:", error);
    return [];
  }
}
