const { ApolloServer, gql } = require('apollo-server');

const config = require('./config');
const db = require('./lib/db');

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const start = async () => {
  await db.connect(config.server.database);
  try {
    const { url } = await server.listen();
    console.log(`🚀  Server ready at ${url}`);
  } catch(err) {
    console.log('error starting server: ', err);
    throw err;
  }
  
}

start();