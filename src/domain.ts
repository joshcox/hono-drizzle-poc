export type User = {
  uuid: string;
  email: string;
  name: string;
};

export interface UserRepositoryPort {
  readOne: (uuid: string) => Promise<User | undefined>;
  create: (user: Omit<User, 'uuid'>) => Promise<User>;
}

export interface RepositoryPort {
  user: UserRepositoryPort;
}

export interface DatabasePort {
  repository: RepositoryPort;
}