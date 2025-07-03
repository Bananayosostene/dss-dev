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

// Define the state type
export type FormState = {
  success: boolean;
  message: string;
  error: string;
};

// Submit contact form - Updated for useFormState with better error handling
export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Check if DATABASE_URL is available
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL is not defined");
      return {
        success: false,
        error: "Database configuration error. Please try again later.",
        message: "",
      };
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields",
        message: "",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
        message: "",
      };
    }

    // Test database connection first
    try {
      await prisma.$connect();
    } catch (connectionError) {
      console.error("Database connection failed:", connectionError);
      return {
        success: false,
        error: "Unable to connect to database. Please try again later.",
        message: "",
      };
    }

    // Create new contact message
    const newMessage = await prisma.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        message: message.trim(),
      },
    });

    console.log("Message created successfully:", newMessage.id);

    // Revalidate admin dashboard
    revalidatePath("/admin");

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      error: "",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);

    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes("connect")) {
        return {
          success: false,
          error: "Database connection failed. Please try again later.",
          message: "",
        };
      }
      if (error.message.includes("timeout")) {
        return {
          success: false,
          error: "Request timed out. Please try again.",
          message: "",
        };
      }
    }

    return {
      success: false,
      error: "Something went wrong. Please try again later.",
      message: "",
    };
  } finally {
    // Ensure connection is closed
    try {
      await prisma.$disconnect();
    } catch (disconnectError) {
      console.error("Error disconnecting from database:", disconnectError);
    }
  }
}

// Get all contact messages for admin with error handling
export async function getContactMessages(): Promise<ContactMessage[]> {
  try {
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL is not defined");
      return [];
    }

    await prisma.$connect();

    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return messages;
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

// Mark message as read with error handling
export async function markMessageAsRead(messageId: string) {
  try {
    if (!process.env.DATABASE_URL) {
      return { success: false, error: "Database configuration error" };
    }

    await prisma.$connect();

    await prisma.contactMessage.update({
      where: { id: messageId },
      data: { isRead: true },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error marking message as read:", error);
    return { success: false, error: "Failed to mark message as read" };
  } finally {
    await prisma.$disconnect();
  }
}

// Delete message with error handling
export async function deleteContactMessage(messageId: string) {
  try {
    if (!process.env.DATABASE_URL) {
      return { success: false, error: "Database configuration error" };
    }

    await prisma.$connect();

    await prisma.contactMessage.delete({
      where: { id: messageId },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting message:", error);
    return { success: false, error: "Failed to delete message" };
  } finally {
    await prisma.$disconnect();
  }
}

// Get message statistics with error handling
export async function getMessageStats() {
  try {
    if (!process.env.DATABASE_URL) {
      return { total: 0, unread: 0, read: 0, today: 0 };
    }

    await prisma.$connect();

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
  } finally {
    await prisma.$disconnect();
  }
}

// Search and filter messages with error handling
export async function searchContactMessages(
  searchTerm = "",
  filterStatus: "all" | "read" | "unread" = "all"
): Promise<ContactMessage[]> {
  try {
    if (!process.env.DATABASE_URL) {
      return [];
    }

    await prisma.$connect();

    const whereClause: any = {};

    // Add search filter
    if (searchTerm) {
      whereClause.OR = [
        { name: { contains: searchTerm, mode: "insensitive" } },
        { email: { contains: searchTerm, mode: "insensitive" } },
        { message: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    // Add status filter
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
  } finally {
    await prisma.$disconnect();
  }
}
