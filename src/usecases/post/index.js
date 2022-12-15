const Post = require("../../models/post").model;

const create = async (tittle, img, tags, content, user) => {
  const date = new Date();

  const newPost = new Post({ tittle, img, tags, content, creationDate:date, user });
  return await newPost.save();
};

const update = async (id, tittle, tags, content) =>
  await Post.findByIdAndUpdate(id, { tittle, tags, content }).exec();

const del = async (id) => await Post.findByIdAndDelete(id).exec();

const getPost = async (id) => await Post.findById(id).exec();

const getAllPost = async () => await Post.find({}).exec();

module.exports = {
  create,
  update,
  del,
  getPost,
  getAllPost,
};
