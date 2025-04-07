const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class FolderRepository {
  async createFolder(name, userId, parentId) {
    return await prisma.folder.create({
      data: {
        name,
        userId,
        parentId,
      },
    });
  }

  async updateFolder(folderId, name, userId, parentId) {
    return await prisma.folder.update({
      where: {
        id: folderId,
      },
      date: {
        name,
        userId,
        parentId,
      },
    });
  }

  async deleteFolder(folderId) {
    return await prisma.folder.delete({
      where: {
        id: folderId,
      },
    });
  }

  async findById(id) {
    return await prisma.folder.findUnique({
      where: { id },
      include: { files: true, children: true },
    });
  }

  async findRootFolder() {
    return await prisma.folder.findFirst({
      where: {
        parentId: null,
      },
      include: { files: true, children: true },
    });
  }
}

const folderRepo = new FolderRepository();
module.exports = folderRepo;
