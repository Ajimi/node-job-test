import User from './user.model';
import Post from './post.model';
import Comment from './comment.model';

export default () => {
  // a post belongs to a single user
  Post.belongsTo(User);

  User.sync();
  Post.sync();

  // a comment belongs to a single user and a single post
  Comment.belongsTo(User);
  Comment.belongsTo(Post);

  Comment.sync();
}
