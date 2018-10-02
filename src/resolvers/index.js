import commentsResolvers from './comments.resolvers';
import postsResolvers from './posts.resolvers';

export default {
  Query: {
    ...postsResolvers.queries,
    ...commentsResolvers.queries
  },

  Mutation: {
    ...postsResolvers.mutations,
    ...commentsResolvers.mutations
  }
}