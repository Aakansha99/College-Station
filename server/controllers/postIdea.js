const mongoose = require("mongoose");
const PostIdea = require("../models/PostIdea");

exports.addPost = async (req, res) => {
  try {
    const post = req.body;
    console.log(post.selectedFile);
    const newPostMessage = new PostIdea({
      ...post,
      creatorID: req.user.id,
      creatorName: req.user.name,
      createdAt: new Date().toISOString(),
    });

    const data = await newPostMessage.save();
    console.log(data);

    res.status(201).json(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
exports.editPost = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    heading,
    problem,
    solution,
    hashtags,
    pictures,
    team_member,
    selectedFile,
    links,
    creator,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = {
    title,
    heading,
    problem,
    solution,
    hashtags,
    pictures,
    team_member,
    selectedFile,
    links,
    creator,
    _id: id,
  };

  const data = await PostIdea.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(data);
};
exports.editCollab = async (req, res) => {
  const { id } = req.params;
  const posts = await PostIdea.findOne({ _id: id });
  console.log(posts);
  if (!posts) {
    res.status(409).json({ message: "post not found" });
  }
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const {
    title,
    heading,
    problem,
    solution,
    hashtags,
    pictures,
    team_member,
    selectedFile,
    links,
    creator,
    collab,
  } = posts;
  const updatedPost = {
    title,
    heading,
    problem,
    solution,
    hashtags,
    pictures,
    team_member,
    selectedFile,
    links,
    creator,
    collab: true,
    _id: id,
  };
  console.log(updatedPost);
  const data = await PostIdea.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(data);
};
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostIdea.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
exports.getPost = async (req, res) => {
  try {
    const _id = req.user.id;
    console.log(_id);
    const data = await PostIdea.find({ creatorID: _id });

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.likes = async (req, res) => {
  const { id } = req.params;

  if (!req.user.id) {
    return res.json({ message: "Unauthenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await PostIdea.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.user.id));

  if (index === -1) {
    post.likes.push(req.user.id);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.user.id));
  }
  const updatedPost = await PostIdea.findByIdAndUpdate(id, post, { new: true });
  res.status(200).json(updatedPost);
};
exports.getPostById = async (req, res) => {
  try {
    console.log("shcjhasjhvcja");
    const _id = req.params.id;
    console.log(_id);
    const data = await PostIdea.find({ _id });
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.getAllPost = async (req, res) => {
  try {
    const data = await PostIdea.find();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
