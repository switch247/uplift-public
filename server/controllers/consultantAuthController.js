const prisma = require('../config/prisma_config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register new consultant
const registerConsultant = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;

  try {
    const oldUser = await prisma.user.findUnique({
      where: { username: req.body.username },
    });

    if (oldUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = await prisma.user.create({
      data: req.body,
    });

    const newConsultant = await prisma.consultant.create({
      data: {
        userId: newUser.id,
      },
    });

    const token = jwt.sign(
      { username: newUser.username, id: newUser.id },
      process.env.JWTKEY,
      { expiresIn: '1h' }
    );
    res.status(200).json({ user: newUser, consultant: newConsultant, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Login consultant
const loginConsultant = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { username } });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(400).json('Wrong password');
      } else {
        const token = jwt.sign(
          { username: user.username, id: user.id },
          process.env.JWTKEY,
          { expiresIn: '1h' }
        );
        const consultant = await prisma.consultant.findUnique({
          where: { userId: user.id },
        });
        res.status(200).json({ user, consultant, token });
      }
    } else {
      res.status(404).json('User not found');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  registerConsultant,
  loginConsultant,
};
