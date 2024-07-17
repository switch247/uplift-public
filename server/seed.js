const prisma = require('./config/prisma_config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

async function main() {
  // Create users
  const createdUsers = [];
  const users = [
    {
      username: 'user1',
      password: await bcrypt.hash('password', 10),
      firstname: 'John',
      lastname: 'Doe',
      isAdmin: false,
      profilePicture: 'path_to_image',
      coverPicture: 'path_to_image',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      country: 'USA',
    },
    {
      username: 'user2',
      password: await bcrypt.hash('password', 10),
      firstname: 'Jane',
      lastname: 'Smith',
      isAdmin: false,
      profilePicture: 'path_to_image',
      coverPicture: 'path_to_image',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      country: 'Canada',
    },
    {
      username: 'user3',
      password: await bcrypt.hash('password', 10),
      firstname: 'Alice',
      lastname: 'Johnson',
      isAdmin: false,
      profilePicture: 'path_to_image',
      coverPicture: 'path_to_image',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      country: 'UK',
    },
    {
      username: 'user4',
      password: await bcrypt.hash('password', 10),
      firstname: 'Bob',
      lastname: 'Brown',
      isAdmin: false,
      profilePicture: 'path_to_image',
      coverPicture: 'path_to_image',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      country: 'Australia',
    },
  ];

  for (const user of users) {
    const createdUser = await prisma.user.create({ data: user });
    createdUsers.push(createdUser);
  }

  // Create consultants using user IDs
  const consultants = [
    { userId: createdUsers[0].id },
    { userId: createdUsers[1].id },
    { userId: createdUsers[2].id },
  ];

  const createdConsultants = [];
  for (const consultant of consultants) {
    const createdConsultant = await prisma.consultant.create({
      data: consultant,
    });
    createdConsultants.push(createdConsultant);
  }

  // Create available times using consultant IDs
  const availableTimes = [
    {
      consultantId: createdConsultants[0].id,
      startTime: new Date('2024-07-15T09:00:00Z'),
      endTime: new Date('2024-07-15T12:00:00Z'),
    },
    {
      consultantId: createdConsultants[1].id,
      startTime: new Date('2024-07-15T14:00:00Z'),
      endTime: new Date('2024-07-15T17:00:00Z'),
    },
    {
      consultantId: createdConsultants[2].id,
      startTime: new Date('2024-07-16T09:00:00Z'),
      endTime: new Date('2024-07-16T12:00:00Z'),
    },
  ];

  await prisma.availableTime.createMany({ data: availableTimes });

  // Create appointments using user and consultant IDs
  const appointments = [
    {
      userId: createdUsers[0].id,
      consultantId: createdConsultants[1].id,
      startTime: new Date('2024-07-16T10:00:00Z'),
      endTime: new Date('2024-07-16T11:00:00Z'),
    },
    {
      userId: createdUsers[1].id,
      consultantId: createdConsultants[0].id,
      startTime: new Date('2024-07-17T15:00:00Z'),
      endTime: new Date('2024-07-17T16:00:00Z'),
    },
    {
      userId: createdUsers[2].id,
      consultantId: createdConsultants[0].id,
      startTime: new Date('2024-07-18T10:00:00Z'),
      endTime: new Date('2024-07-18T11:00:00Z'),
    },
    {
      userId: createdUsers[3].id,
      consultantId: createdConsultants[1].id,
      startTime: new Date('2024-07-19T15:00:00Z'),
      endTime: new Date('2024-07-19T16:00:00Z'),
    },
  ];

  await prisma.appointment.createMany({ data: appointments });

  // Create user-consultant relationships
  const userConsultants = [
    { userId: createdUsers[0].id, consultantId: createdConsultants[0].id },
    { userId: createdUsers[1].id, consultantId: createdConsultants[1].id },
    { userId: createdUsers[2].id, consultantId: createdConsultants[2].id },
    { userId: createdUsers[3].id, consultantId: createdConsultants[3].id },
  ];

  await prisma.userConsultant.createMany({ data: userConsultants });

  // Create chats using user IDs
  const chats = [
    { members: [createdUsers[0].id, createdConsultants[0].id] },
    { members: [createdUsers[1].id, createdConsultants[1].id] },
    { members: [createdUsers[2].id, createdConsultants[0].id] },
    { members: [createdUsers[3].id, createdConsultants[1].id] },
  ];

  const createdChats = [];
  for (const chat of chats) {
    const createdChat = await prisma.chat.create({ data: chat });
    createdChats.push(createdChat);
  }

  // Create messages using chat IDs
  const messages = [];
  for (let i = 1; i <= 10; i++) {
    messages.push({
      chatId: createdChats[0].id,
      senderId: createdUsers[0].id,
      text: `Message ${i} from user1`,
    });
    messages.push({
      chatId: createdChats[0].id,
      senderId: createdConsultants[0].id,
      text: `Reply ${i} from consultant1`,
    });
  }
  for (let i = 1; i <= 10; i++) {
    messages.push({
      chatId: createdChats[1].id,
      senderId: createdUsers[1].id,
      text: `Message ${i} from user2`,
    });
    messages.push({
      chatId: createdChats[1].id,
      senderId: createdConsultants[1].id,
      text: `Reply ${i} from consultant2`,
    });
  }

  await prisma.message.createMany({ data: messages });

  // Create posts using user IDs
  const posts = [
    { userId: createdUsers[0].id, desc: 'Post 1 from user1', likes: [] },
    { userId: createdUsers[1].id, desc: 'Post 2 from user2', likes: [] },
    { userId: createdUsers[2].id, desc: 'Post 3 from user3', likes: [] },
    { userId: createdUsers[3].id, desc: 'Post 4 from user4', likes: [] },
    { userId: createdUsers[0].id, desc: 'Post 5 from user1', likes: [] },
  ];

  await prisma.post.createMany({ data: posts });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
