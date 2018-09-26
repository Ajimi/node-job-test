const User = require('./user.model');
const Post = require('./post.model');
const Comment = require('./comment.model');

module.exports = () => {
  // a post belongs to a single user
  Post.belongsTo(User);

  // a comment belongs to a single user and a single post
  Comment.belongsTo(User);
  Comment.belongsTo(Post);

  User.sync();
  Post.sync(); 
  Comment.sync({force: true}); 
}
 