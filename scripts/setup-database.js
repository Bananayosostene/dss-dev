const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Setting up database...");

  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");

    const sampleMessage = await prisma.contactMessage.create({
      data: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+250788123456",
        message: "Hello, I would like to know more about your IT services.",
      },
    });

    console.log("✅ Sample message created:", sampleMessage.id);
  } catch (error) {
    console.error("❌ Database setup failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
