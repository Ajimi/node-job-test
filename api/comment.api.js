const Post = require('../models/post.model');
const User = require('../models/user.model');
const Comment = require('../models/comment.model');

module.exports = {

  async createComment(args) {
    try {
      return await Comment.create(args);
    } catch(err) {
      console.log(err);
      throw err;
    }
  }

}