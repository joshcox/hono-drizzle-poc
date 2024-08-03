import { DataSourceOptions } from "typeorm";
import { User } from "../user/infra/db/record/user.record";

export default (): DataSourceOptions => {
  return {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'bluffcountrybeef',
    entities: [User],
    synchronize: true,
  };
};
