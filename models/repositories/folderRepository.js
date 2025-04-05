const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class FolderRepository {
  async findById(id) {
    return prisma.folder.findUnique({
      where: { id },
      include: { files: true, children: true },
    });
  }
}

const folderRepo = new FolderRepository();
module.exports = folderRepo;
