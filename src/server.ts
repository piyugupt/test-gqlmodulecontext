
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { appModules } from './graphql-modules';


const app = express();

const customkey1 = 'customval1';
const customkey2 = 'customval2';

// Setup Apollo (GraphQL) Server
const { schema, context } = appModules.forRoot({});
const server = new ApolloServer({
  schema,
  context: ({req}) => ({customkey1, customkey2})
});
server.applyMiddleware({ app });

// Start Server
const port = process.env.DEFAULT_PORT || 8080;
app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
