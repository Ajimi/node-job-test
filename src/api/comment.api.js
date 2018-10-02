const Comment = require('../models/comment.model');

module.exports = {

  async createComment(args) {
    try {
      return await Comment.create(args);
    } catch(err) {
      console.log(err);
      throw err;
    } 
  },

  async getComments(postId) {
    try {
      return await Comment.findAll({ where: { postId: postId } });
    } catch(err) {
      console.log(err);
      throw err;
    }
  }

}