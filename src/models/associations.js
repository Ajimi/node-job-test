const User = require('./user.model');
const Post = require('./post.model');
const Comment = require('./comment.model');

module.exports = () => {
  // a post belongs to a single user
  Post.belongsTo(User);
  
  User.sync();
  Post.sync(); 
  
  // a comment belongs to a single user and a single post
  Comment.belongsTo(User);
  Comment.belongsTo(Post);

  Comment.sync();
}
 