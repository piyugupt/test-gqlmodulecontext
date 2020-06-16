import { GraphQLModule } from '@graphql-modules/core';
import myModule from './mymodule';

export const appModules = new GraphQLModule({
  imports: [myModule]
});
