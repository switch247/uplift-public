const prisma = require('../config/prisma_config');

// creating a post
 const createPost = async (req, res) => {
  try {
    const newPost = await prisma.post.create({
      data: req.body,
    });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a post
 const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update post
 const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });
    if (post.userId === userId) {
      const updatedPost = await prisma.post.update({
        where: { id: postId },
        data: req.body,
      });
      res.status(200).json("Post updated!");
    } else {
      res.status(403).json("Authentication failed");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a post
 const deletePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });
    if (post.userId === userId) {
      await prisma.post.delete({
        where: { id: postId },
      });
      res.status(200).json("Post deleted.");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// like/dislike a post
 const likePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });
    if (post.likes.includes(userId)) {
      const updatedLikes = post.likes.filter((id) => id !== userId);
      await prisma.post.update({
        where: { id: postId },
        data: { likes: updatedLikes },
      });
      res.status(200).json("Post disliked");
    } else {
      const updatedLikes = [...post.likes, userId];
      await prisma.post.update({
        where: { id: postId },
        data: { likes: updatedLikes },
      });
      res.status(200).json("Post liked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get timeline posts
//  const getTimelinePosts = async (req, res) => {
//   const userId = req.params.id;

//   try {
//     const currentUserPosts = await prisma.post.findMany({
//       where: { userId },
//     });

//     const followingPosts = await prisma.user.findUnique({
//       where: { id: userId },
//       select: {
//         following: {
//           select: {
//             posts: true,
//           },
//         },
//       },
//     });

//     const allPosts = currentUserPosts.concat(
//       ...followingPosts.following.flatMap((user) => user.posts)
//     );

//     allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//     res.status(200).json(allPosts);
//   } catch (error) {
//     console.log(error)
//     res.status(500).json(error);
//   }
// };

const getTimelinePosts = async (req, res) => {
  const userIdx = req.params.id;

  try {
    const allPosts = await prisma.post.findMany({
      where: { userId: { not: userIdx } },
    });

    allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json(allPosts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = {createPost, deletePost, likePost, getTimelinePosts, getPost, updatePost}