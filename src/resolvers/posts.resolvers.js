import postApi from '../api/post.api';
import selectionHelper from '../utils/selectionHelper';

export default {
  queries: {
    posts: () => postApi.getPosts(),
    post: (root, args, ctx, info) => postApi.getPost(args.id, selectionHelper.extractSelection(info)),
  },

  mutations: {
    createPost: (root, args) => postApi.createPost(args)
  }
}