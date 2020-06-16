import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class BaseRESTDataSource extends RESTDataSource {
  constructor() {
    super();
  }

  willSendRequest(request: RequestOptions): void {
    // This returns empty
    console.log('Context = ' + JSON.stringify(this.context));    
  }
}
