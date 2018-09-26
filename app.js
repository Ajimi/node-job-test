const { 
  ApolloServer, 
  gql,
  UserInputError,
  ApolloError
} = require('apollo-server');

const db = require('./lib/db');
const associations = require('./models/associations');

const postApi = require('./api/post.api');
const commentsApi = require('./api/comment.api');
const userApi = require('./api/user.api');

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
    async posts() {
      try {
        return await postApi.getPosts();
      } catch(err) {
        throw new ApolloError('Server error');
      } 
    },

    async post(root, args) {
      try {
        return await postApi.getPost(args.id);
      } catch(err) {
        throw new ApolloError('Server error');
      } 
    },
  },

  Post: {
    async user(root) {
      try {
        return await userApi.getUser(root.userId);        
      } catch(err) {
        throw new ApolloError('Server error');
      } 
    },

    async comments(root) {
      try {
        return await commentsApi.getComments(root.id);
      } catch(err) {
        throw new ApolloError('Server error');
      }
    }
  },

  Comment: {
    async user(root) {
      try {
        return await userApi.getUser(root.userId);        
      } catch(err) {
        throw new ApolloError('Server error');
      } 
    }
  },

  Mutation: {
    async createPost(root, args) {
      try {
        return await postApi.createPost(args);
      } catch(err) {
        throw new UserInputError('All fields are required');
      }      
    },

    async commentPost(root, args) {
      try {
        return await commentsApi.createComment(args);
      } catch(err) {
        throw new UserInputError('All fields are required');
      }
    }
  }
};

const start = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  // setup database associations
  associations();

  try {
    await db.verifyConnection();
    const { url } = await server.listen();
    console.log(`🚀  Server ready at ${url}`);
  } catch(err) {
    console.log('error starting server: ', err);
    throw err;
  }
  
}

start();