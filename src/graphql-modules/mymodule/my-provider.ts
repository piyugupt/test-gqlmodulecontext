
import { Injectable, ProviderScope } from '@graphql-modules/di';
import { BaseRESTDataSource } from '../../core/base-rest-data-source';


@Injectable({
  scope: ProviderScope.Session
})
export class MyProvider extends BaseRESTDataSource {
  constructor() {
    super();
  }

  async getUser(): Promise<object> {
    const response = await this.get('https://jsonplaceholder.typicode.com/todos/2');
    return response || {};
  }
}
