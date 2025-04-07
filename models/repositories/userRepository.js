const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserRepository {
  async createUser(email, password, firstName, lastName) {
    return await prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });
  }

  async updateUser(userId, email, password, firstName, lastName) {
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });
  }

  async deleteUser(userId) {
    return await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }
}

const userRepo = new UserRepository();
module.exports = userRepo;
