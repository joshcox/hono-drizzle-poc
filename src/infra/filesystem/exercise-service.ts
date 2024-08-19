import { readFile, readdir } from 'fs/promises';
import { resolve } from "path";
import { BaseError } from '../../error';

class ExerciseServiceCollectionReadError extends BaseError { }

/**
 * Read an arbitrarily deep directory of json files. 
 */
const readCollection = async (path: string) => {
  const files = await readdir(path, { recursive: true, withFileTypes: true, encoding: 'utf-8' });

  let jsons = [];
  for (const file of files) {
    if (file.isFile()) {
      const filePath = resolve(file.parentPath, file.name);
      const json = await readFile(filePath, 'utf-8');
      jsons.push(JSON.parse(json));
    }
  }
  return jsons;
}

const collections = ['exercise', 'family', 'chain', 'equipment', 'classification'] as const;

export type ExerciseData = {
  exercise: Array<{
    slug: string;
    name: string;
    anatomicalName: string | null;
    repType: "bilateral" | "unilateral" | "switch sides" | "multi-motion" | "alternating";
    status: "active" | string;
    difficulty: number | null;
    equipment: string[];
    classifications: string[];
    chains: string[];
  }>;
  equipment: Array<{
    name: string;
    imageSlug: string | null;
    urn: string;
  }>;
  classification: Array<{
    name: string;
    parent?: string | null;
    children?: ExerciseData['classification']
  }>;
  family: Array<{
    urn: string;
    name: string;
    version: string;
    type: 'strength' | 'mobility' | 'coordination';
  }>;
  chain: Array<{
    urn: string;
    name: string;
    families: string[];
    version: string;
  }>;
};


const getExerciseServiceCollections = async (pathToExerciseService: string): Promise<ExerciseData> => {
  try {
    const collectionPath = (name: typeof collections[number]): string =>
      resolve(process.cwd(), pathToExerciseService, 'src/modules/ingestion/collection/', name);

    const allCollections: Record<typeof collections[number], any> = {
      exercise: await readCollection(collectionPath('exercise')),
      equipment: await readCollection(collectionPath('equipment')),
      classification: await readCollection(collectionPath('classification')),
      family: await readCollection(collectionPath('family')),
      chain: await readCollection(collectionPath('chain')),
    };

    return allCollections;
  } catch (error) {
    const newError = new ExerciseServiceCollectionReadError('Failed to retrieve exercise service collections', {
      cause: error
    });
    console.error(newError);
    throw newError;
  }
};

export default getExerciseServiceCollections;