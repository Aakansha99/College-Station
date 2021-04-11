const express = require("express");
const router = express.Router();
const {addPost,editPost,deletePost,getPost,likes,getPostById,getAllPost,editCollab} = require('../controllers/postIdea');
const auth =require('../middlewares/auth')

router.get("/", getAllPost)
router.get("/:id",auth, getPost)
router.get("/:id/post",auth, getPostById)
router.post("/",auth,addPost);
router.patch("/:id",auth,editPost);
router.patch("/:id/collab",editCollab);
router.delete("/:id",auth,deletePost);
router.patch("/:id/likePost",auth,likes);

module.exports = router;