export type User = {
  uuid: string;
  email: string;
  name: string;
};

export type Todo = {
  uuid: string;
  title: string;
  description?: string;
  userUuid: string;
  status: 'not started' | 'in progress' | 'done' | 'archived';
  createdAt: Date;
  updatedAt: Date;
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

