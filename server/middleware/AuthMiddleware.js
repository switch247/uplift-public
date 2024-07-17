const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config();
const secret = process.env.JWTKEY;

const authMiddleWare = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    const decoded = jwt.verify(token, secret);
    req.body.id = decoded?.id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleWare;
