export type User = {
  uuid: string;
  email: string;
  name: string;
};

export type Todo = {
  uuid: string;
  title: string;
  description: string | null;
  archived: boolean;
  working: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export interface UserRepositoryPort {
  readOne: (uuid: string) => Promise<User | undefined>;
  create: (user: Omit<User, 'uuid'>) => Promise<User>;
};

export interface RepositoryPort {
  user: UserRepositoryPort;
  todo: {
    readOne: (uuid: string) => Promise<Todo>;
    readAll: () => Promise<Todo[]>;
    create: (todo: Omit<Todo, 'uuid'>) => Promise<Todo>;
    archive: (uuid: string) => Promise<Todo>;
    remove: (uuid: string) => Promise<void>;
    setWorking: (uuid: string, working: boolean) => Promise<Todo>;
  };
}

export interface DatabasePort {
  repository: RepositoryPort;
}

