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

export type TodoWorkLog = {
  uuid: string;
  todoUuid: string;
  start: Date;
  end: Date | null;
};

export type TodoAggregate = Todo & {
  workLogs: TodoWorkLog[];
};

export const calculateWorkingTime = (workLogs: TodoWorkLog[]): number => {
  return workLogs.filter(log => log.end !== null).reduce((acc, log) => {
    const end = log.end ?? new Date();
    return acc + (end.getTime() - log.start.getTime());
  }, 0);
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

