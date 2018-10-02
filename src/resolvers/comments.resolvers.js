import commentsApi from '../api/comment.api';

export default {

  queries: {

  },

  mutations: {
    commentPost: (root, args) => {console.log('here'); return commentsApi.createComment(args)}
  }

}