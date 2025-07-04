"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Create transporter using your Gmail credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    // Email content for the company
    const companyEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #F17105; margin: 0;">New Contact Message</h1>
          <p style="color: #666; margin: 5px 0;">Digital Support Solutions</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;">${
                formData.phone || "Not provided"
              }</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${
            formData.message
          }</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #888; font-size: 12px; margin: 0;">
            This message was sent from the DSS website contact form
          </p>
          <p style="color: #888; font-size: 12px; margin: 5px 0 0 0;">
            Received on: ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `;

    // Auto-reply email content for the visitor
    const autoReplyContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #F17105; margin: 0;">Thank You for Contacting Us!</h1>
          <p style="color: #666; margin: 5px 0;">Digital Support Solutions</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="color: #333; margin: 0 0 15px 0;">Dear ${formData.name},</p>
          <p style="color: #555; line-height: 1.6; margin: 0 0 15px 0;">
            Thank you for reaching out to Digital Support Solutions. We have received your message and our team will review it shortly.
          </p>
          <p style="color: #555; line-height: 1.6; margin: 0;">
            We typically respond to all inquiries within 24 hours during business days. If your matter is urgent, please don't hesitate to call us directly at <strong>+250 788 300 967</strong>.
          </p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #eee; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #333; margin-top: 0;">Your Message Summary:</h3>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
        </div>
        
        <div style="text-align: center; margin-bottom: 20px;">
          <h3 style="color: #F17105; margin: 0 0 15px 0;">Our Services</h3>
          <p style="color: #555; font-size: 14px; line-height: 1.5;">
            IT Helpdesk Support • Cybersecurity Solutions • Software Development<br>
            Website Design • Data Collection Services • Network Setup
          </p>
        </div>
        
        <div style="text-align: center; background-color: #F17105; color: white; padding: 15px; border-radius: 8px;">
          <p style="margin: 0; font-weight: bold;">Digital Support Solutions</p>
          <p style="margin: 5px 0 0 0; font-size: 14px;">Your trusted IT partner • Available 24/7</p>
        </div>
      </div>
    `;

    // Send email to company
    await transporter.sendMail({
      from: `"DSS Contact Form" <${process.env.NODEMAILER_USER}>`,
      to: process.env.NODEMAILER_USER,
      subject: `New Contact Message from ${formData.name}`,
      html: companyEmailContent,
      replyTo: formData.email,
    });

    // Send auto-reply to visitor
    await transporter.sendMail({
      from: `"Digital Support Solutions" <${process.env.NODEMAILER_USER}>`,
      to: formData.email,
      subject: "Thank you for contacting Digital Support Solutions",
      html: autoReplyContent,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message:
        "Failed to send message. Please try again or contact us directly.",
    };
  }
}
