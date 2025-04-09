const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Delete existing data (optional)
  await prisma.file.deleteMany();
  await prisma.folder.deleteMany();
  await prisma.user.deleteMany();

  // Create test user
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      password: "123",
      firstName: "Test",
      lastName: "User",
    },
  });

  // Create root folder
  const rootFolder = await prisma.folder.create({
    data: {
      name: "Root",
      userId: user.id,
    },
  });

  // Create subfolder
  const documentsFolder = await prisma.folder.create({
    data: {
      name: "Documents",
      userId: user.id,
      parentId: rootFolder.id,
    },
  });

  const picturesFolder = await prisma.folder.create({
    data: {
      name: "Pictures",
      userId: user.id,
      parentId: rootFolder.id,
    },
  });

  const financesFolder = await prisma.folder.create({
    data: {
      name: "Finances",
      userId: user.id,
      parentId: rootFolder.id,
    },
  });

  // Create sample files
  await prisma.file.createMany({
    data: [
      {
        name: "README.md",
        fileType: "markdown",
        fileSize: 1024.0,
        fileUrl: "supabase-url",
        userId: user.id,
        folderId: rootFolder.id,
      },
      {
        name: "Report.pdf",
        fileType: "pdf",
        fileSize: 20480,
        fileUrl: "supabase-url",
        userId: user.id,
        folderId: documentsFolder.id,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
