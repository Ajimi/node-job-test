const Post = require('../models/post.model');
const User = require('../models/user.model');

module.exports = {

  async createPost(args) {
    try {
      const user = await User.findById(args.userId);
      const post =  await Post.create(args);
      
      return {
        ...post.get(),
        user
      };
    } catch(err) {
      console.log(err);
      throw err;
    }
  }

}