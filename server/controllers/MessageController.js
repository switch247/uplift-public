const prisma = require('../config/prisma_config');

 const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  try {
    const newMessage = await prisma.message.create({
      data: {
        chatId,
        senderId,
        text,
      },
    });
    res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).json(error);
  }
};

 const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const messages = await prisma.message.findMany({
      where: {
        chatId,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {addMessage, getMessages};