const prisma = require('../config/prisma_config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Get a User
const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        firstname: true,
        lastname: true,
        isAdmin: true,
        profilePicture: true,
        coverPicture: true,
        about: true,
        country: true,
        followers: true,
        following: true,
      },
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json('No such User');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Update a user
const updateUser = async (req, res) => {
  const uid = req.params.id;
  const { id, currentUserAdmin, password, ...otherData } = req.body;

  if (uid === id) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        otherData.password = await bcrypt.hash(password, salt);
      }
      const user = await prisma.user.update({
        where: { id },
        data: otherData,
      });
      const token = jwt.sign(
        { username: user.username, id: user.id },
        process.env.JWTKEY,
        { expiresIn: '1h' }
      );
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res
      .status(403)
      .json('Access Denied! You can update only your own Account.');
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdmin } = req.body;

  if (currentUserId === id || currentUserAdmin) {
    try {
      await prisma.user.delete({
        where: { id },
      });
      res.status(200).json('User Deleted Successfully!');
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json('Access Denied!');
  }
};

// Follow a User
const followUser = async (req, res) => {
  const uid = req.params.id;
  const { id } = req.body;

  if (uid === id) {
    res.status(403).json('Action Forbidden');
  } else {
    try {
      const followUser = await prisma.user.findUnique({
        where: { id },
      });
      const followingUser = await prisma.user.findUnique({
        where: { id: id },
      });

      if (!followUser.followers.includes(id)) {
        await prisma.user.update({
          where: { id },
          data: { followers: { push: id } },
        });
        await prisma.user.update({
          where: { id: id },
          data: { following: { push: id } },
        });
        res.status(200).json('User followed!');
      } else {
        res.status(403).json('You are already following this user');
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

// Unfollow a User
const unfollowUser = async (req, res) => {
  const uid = req.params.id;
  const { id } = req.body;

  if (uid === id) {
    res.status(403).json('Action Forbidden');
  } else {
    try {
      const unFollowUser = await prisma.user.findUnique({
        where: { id },
      });
      const unFollowingUser = await prisma.user.findUnique({
        where: { id: id },
      });

      if (unFollowUser.followers.includes(id)) {
        await prisma.user.update({
          where: { id },
          data: {
            followers: {
              set: unFollowUser.followers.filter(
                (followerId) => followerId !== id
              ),
            },
          },
        });
        await prisma.user.update({
          where: { id: id },
          data: {
            following: {
              set: unFollowingUser.following.filter(
                (followingId) => followingId !== id
              ),
            },
          },
        });
        res.status(200).json('Unfollowed Successfully!');
      } else {
        res.status(403).json('You are not following this user');
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

module.exports = {
  deleteUser,
  followUser,
  unfollowUser,
  updateUser,
  getAllUsers,
  getUser,
};
