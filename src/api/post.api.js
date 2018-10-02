const Post = require('../models/post.model');
const User = require('../models/user.model');

module.exports = {

  async createPost(args) {
    try {
      const user = await User.findById(args.userId);
      return await Post.create(args);
    } catch(err) {
      console.log(err);
      throw err;
    }
  },

  async getPosts() {
    try {
      return await Post.all();
    } catch(err) {
      console.log(err);
      throw err;
    }
  },

  async getPost(id) {
    try {
      return await Post.findById(id);
    } catch(err) {
      console.log(err);
      throw err;
    }
  }

};