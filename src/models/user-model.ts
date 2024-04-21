import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const userModel = {
  findAll: async () => {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  },
};

export default userModel;


