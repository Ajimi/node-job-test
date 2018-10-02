import Comment from '../models/comment.model';

export default {

  createComment(args) {
    return Comment.create(args);
  },

  getComments(postId) {
    return Comment.findAll({ where: { postId: postId } });
  }

}