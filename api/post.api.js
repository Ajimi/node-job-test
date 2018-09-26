const Post = require('../models/post.model');

module.exports = {

  async createPost(args) {
    try {
      return await Post.create(args);
    } catch(err) {
      console.log(err);
      throw err;
    }
  }

}