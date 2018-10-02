import Post from '../models/post.model';
import User from '../models/user.model';

export default {

  createPost : args =>
    Promise.all([
      User.findById(args.userId),
      Post.create(args)
    ]).then(([user, post]) => ({
      ...post.get(),
      user: user.get()
    })),

  getPosts: () => Post.all({include: ['user', 'comments']}),

  getPost: (id, selection) =>
    Post.findById(id, {
      attributes: selection.selections,
      include: selection.joins
    })

};