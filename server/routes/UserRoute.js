const express = require('express');
const {
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  unfollowUser,
  updateUser,
} = require('../controllers/UserController.js');
const authMiddleWare = require('../middleware/AuthMiddleware.js');

const router = express.Router();

router.get('/:id', getUser);
router.get('/', getAllUsers);
router.put('/:id', authMiddleWare, updateUser);
router.delete('/:id', authMiddleWare, deleteUser);
router.put('/:id/follow', authMiddleWare, followUser);
router.put('/:id/unfollow', authMiddleWare, unfollowUser);

module.exports = router;
