const { 
  ApolloServer, 
  gql,
  UserInputError,
  ApolloError
} = require('apollo-server');

const db = require('./lib/db');
const postApi = require('./api/post.api');

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    user: User
    content: String
  }

  type User {
    id: ID
    name: String
    posts: [Post]
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createPost(title: String, content:String, userId: ID): Post
  }
`;

const resolvers = {
  Query: {
    async posts() {
      try {
        const posts = await postApi.getPosts();
        return posts;
      } catch(err) {
        throw new ApolloError('Server error');
      }
    }
  },

  Mutation: {
    async createPost(roo, args) {
      try {
        return await postApi.createPost(args);
      } catch(err) {
        throw new UserInputError('All fields are required');
      }
      
    }
  }
};

const start = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  
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