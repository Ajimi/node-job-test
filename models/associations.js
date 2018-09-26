const User = require('./user.model');
const Post = require('./post.model');
const Comment = require('./comment.model');

module.exports = () => {
  // a post belongs to a single user
  User.hasOne(Post);

  // a comment belongs to a single user and a single post
  Comment.belongsTo(User);
  Comment.belongsTo(Post);

  // post has many comments 
  Post.hasMany(Comment);

  User.sync();
  Post.sync();
  Comment.sync(); 
}
