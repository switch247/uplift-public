const prisma = require('../config/prisma_config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const dotenv = require("dotenv");
dotenv.config();
const secrete = process.env.JWTKEY;
// Register new user
 const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  const { username, password, ...rest } = req.body;
  const newUser = { ...rest, username, password: hashedPass };

  try {
    const oldUser = await prisma.user.findUnique({ where: { username } });

    if (oldUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await prisma.user.create({ data: newUser });
    const token = jwt.sign(
      { username: user.username, id: user.id },secrete,
      { expiresIn: '1h' }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Login User
 const loginUser = async (req, res) => {
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
          secrete,
          { expiresIn: '1h' }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json('User not found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {registerUser, loginUser};