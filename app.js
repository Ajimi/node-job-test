const { ApolloServer, gql } = require('apollo-server');

const db = require('./lib/db');
const postApi = require('./api/post.api');

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    author: String
    content: String
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createPost(title: String, content:String, author: String): Post
  }
`;

const resolvers = {
  Query: {
    posts: () => [],
  },

  Mutation: {
    async createPost(roo, args) {
      return await postApi.createPost(args);
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