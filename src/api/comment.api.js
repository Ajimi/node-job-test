import Comment from '../models/comment.model';
import User from '../models/user.model';

export default {

  createComment(args) {
    return Promise.all([
      User.findById(args.userId),
      Comment.create(args)
    ]).then(([user, comment]) => ({
      ...comment.get(),
      user: user.get()
    }));
  },

  getComments(postId) {
    return Comment.findAll({ where: { postId: postId } });
  }

}