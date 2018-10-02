import {
  ApolloServer,
  gql
} from 'apollo-server';

import { verifyConnection } from './lib/db';
import associations from './models/associations';

import postApi from './api/post.api';
import commentsApi from './api/comment.api';
import userApi from './api/user.api';

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    user: User
    content: String
    comments: [Comment]
  }

  type User {
    id: ID
    name: String
    posts: [Post]
  }

  type Comment {
    id: ID
    description: String
    post: Post
    user: User
  }

  type Query {
    posts: [Post]
    post(id: ID): Post
  }

  type Mutation {
    createPost(title: String, content:String, userId: ID): Post
    commentPost(description: String, postId: ID, userId: ID): Comment
  }
`;

const resolvers = {
  Query: {
    posts: () => postApi.getPosts(),

    post: (root, args) => postApi.getPost(args.id)
  },


  Mutation: {
    createPost(root, args) {
      return postApi.createPost(args);
    },

    commentPost(root, args) {
      return commentsApi.createComment(args);
    }
  }
};

const start = () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  // setup database associations
  associations();

  verifyConnection()
    .then(() => server.listen())
    .then(({ url }) => console.log(`🚀  Server ready at ${url}`))
    .catch(err => console.log('error starting server: ', err));

}

start();