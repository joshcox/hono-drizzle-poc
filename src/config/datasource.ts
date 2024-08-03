import { DataSourceOptions } from "typeorm";
import { User } from "../user/infra/db/record/user.record";

export default (): DataSourceOptions => {
  return {
    type: 'sqlite',
    database: 'data/database.sqlite',
    entities: [User],
    synchronize: true,
  };
};
