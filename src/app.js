import { ApolloServer, makeExecutableSchema } from 'apollo-server';

import { verifyConnection } from './lib/db';
import associations from './models/associations';
import selectionHelper from './utils/selectionHelper';

import typeDefs from './types';
import resolvers from './resolvers';

const start = () => {
  const server = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers})
  });

  // setup database associations
  associations();

  verifyConnection()
    .then(() => server.listen())
    .then(({ url }) => console.log(`🚀  Server ready at ${url}`))
    .catch(err => console.log('error starting server: ', err));

}

start();