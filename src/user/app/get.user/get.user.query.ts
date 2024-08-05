import { User } from "../../domain/user";

export default (): User => {
  return {
    uuid: '123',
    name: 'Josh',
    email: 'josh@example.com',
  }
};
