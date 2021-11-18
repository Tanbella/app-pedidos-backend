import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoDB',
  connector: 'mongodb',
  url: 'mongodb://Tanbella:TanbellaSerna@cluster0-shard-00-00.uwoga.mongodb.net:27017,cluster0-shard-00-01.uwoga.mongodb.net:27017,cluster0-shard-00-02.uwoga.mongodb.net:27017/PedidosDB?ssl=true&replicaSet=atlas-7btf20-shard-0&authSource=admin&retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
