const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class FolderServices {
  // constructor(prisma) {
  //     this.prisma = prisma;
  // }

  async createFolder(name, userId, parentId) {
    await prisma.folder.create({
      data: {
        name,
        userId,
        parentId,
      },
    });
  }
}

const folderServices = new FolderServices();
module.exports = folderServices;
