const prisma = require('./config/prisma_config');
const dotenv = require('dotenv');
dotenv.config();

async function deleteAllData() {
  try {
    await prisma.$transaction(async (prisma) => {
      // Delete all dependent collections first
    //   await prisma.message.deleteMany({});
    //   console.log('Messages deleted.');

    //   await prisma.chat.deleteMany({});
    //   console.log('Chats deleted.');

    //   await prisma.post.deleteMany({});
    //   console.log('Posts deleted.');

    //   await prisma.availableTime.deleteMany({});
    //   console.log('Available Times deleted.');

    //   await prisma.userConsultant.deleteMany({});
    //   console.log('User Consultants deleted.');

    //   await prisma.appointment.deleteMany({});
    //   console.log('Appointments deleted.');
      
    //   // Delete the more dependent collections
    //   await prisma.consultant.deleteMany({});
    //   console.log('Consultants deleted.');

      // Delete the User collection last
      await prisma.user.deleteMany({});
      console.log('Users deleted.');
    });

    console.log('All data deleted successfully.');
  } catch (error) {
    console.error('Error deleting data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteAllData();
