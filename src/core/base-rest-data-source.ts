import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class BaseRESTDataSource extends RESTDataSource {
  constructor() {
    super();
  }

  willSendRequest(request: RequestOptions): void {
    // This returns empty and does not contain the customkey1 / customkey2 
    // values initialized in Apollo Server
    console.log('Context = ' + JSON.stringify(this.context));    
  }
}
