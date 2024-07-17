const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

const prisma = new PrismaClient({
    omit: {
      user: {
        password: true, // Exclude the password field
      },
    },
  });
module.exports = prisma;


