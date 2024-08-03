import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import environment from './config';
import router from './router';
import { DataSource } from 'typeorm';
import datasource from './config/datasource';

const bootstrap = async () => {
  await new DataSource(datasource()).initialize();

  return new Koa()
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(environment.PORT, () => {
      console.log(`Server running on port ${environment.PORT}`);
    });
};

bootstrap().catch(error => {
  console.error('Failed to bootstrap the application:', error);
  process.exit(1);
});


