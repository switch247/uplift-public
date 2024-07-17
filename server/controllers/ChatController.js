
const prisma = require('../config/prisma_config');


 const createChat = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    const newChat = await prisma.chat.create({
      data: {
        members: [senderId, receiverId],
      },
    });
    res.status(200).json(newChat);
  } catch (error) {
    res.status(500).json(error);
  }
};

 const userChats = async (req, res) => {
  const { userId } = req.params;
  try {
    const chats = await prisma.chat.findMany();
    res.status(200).json(chats);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

 const findChat = async (req, res) => {
  const { firstId, secondId } = req.params;
  try {
    const chat = await prisma.chat.findFirst({
      where: {
        members: {
          hasEvery: [firstId, secondId],
        },
      },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {createChat, userChats, findChat};