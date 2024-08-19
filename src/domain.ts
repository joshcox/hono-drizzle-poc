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

export type ExerciseDB = {
  uuid: string;
  name: string;
  description: null | string;
  filename: string;
  createdAt: Date;
  updatedAt: Date;
};

namespace ExerciseService {
  export type Exercise = {
    slug: string;
    name: string;
    anatomicalName: string | null;
    repType: "bilateral" | "unilateral" | "switch sides" | "multi-motion" | "alternating";
    status: "active" | string;
    difficulty: number | null;
    chains: Pick<Chain, 'urn'>[];
  };

  export type Equipment = {
    name: string;
    urn: string;
  };

  export type Classification = {
    name: string;
    parent: string;
  };

  export type Family = {
    urn: string;
    name: string;
    version: string;
    type: 'strength' | 'mobility' | 'coordination';
  }

  export type Chain = {
    urn: string;
    name: string;
    version: string;
    families: Pick<Family, 'urn'>[];
  }
}

export interface RepositoryPort {
  exercisedb: {
    create: (db: ExerciseDB) => Promise<ExerciseDB>;
    readOne: (uuid: string) => Promise<ExerciseDB>;
    readAll: () => Promise<ExerciseDB[]>;
    remove: (uuid: string) => Promise<void>;
  },
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

