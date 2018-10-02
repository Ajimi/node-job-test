import Post from '../models/post.model';
import User from '../models/user.model';

export default {

  createPost(args) {
    return Promise.all([
      User.findById(args.userId),
      Post.create(args)
    ]).then(([user, post]) => ({
      ...post.get(),
      user: user.get()
    }));
  },

  getPosts() {
    return Post.all({include: ['user', 'comments']});
  },

  getPost(id, selection) {
    return Post.findById(id, {
      attributes: selection.selections,
      include: selection.joins
    });
  }

};