import { GraphQLModule, ModuleContext, Resolvers } from '@graphql-modules/core';
import gql from 'graphql-tag';
import { MyProvider } from './my-provider';

const typeDefs = gql`
  type UserData {
    userId: String,
    title: String
  }

  type Query {
    userid(userId: String!): UserData
  }
`;

const resolvers: Resolvers = {
  Query: {
    userid: async (root, args, { injector }: ModuleContext) => injector.get(MyProvider).getUser()
  },
  UserData: {
    userId: async (root, { injector }: ModuleContext) => root.userId,
    title: async (root, args, { injector }: ModuleContext) => root.title
  }
};

const myModule = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [MyProvider]
});
export default myModule;
