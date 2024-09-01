import { readFile, readdir } from 'fs/promises';
import { resolve } from "path";
import { z } from "zod";
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

const exerciseSchema = z.object({
  slug: z.string(),
  name: z.string(),
  anatomicalName: z.string().nullable(),
  repType: z.enum(["bilateral", "unilateral", "switch sides", "multi-motion", "alternating"]),
  status: z.union([z.literal("active"), z.string()]),
  difficulty: z.number().nullable(),
  equipment: z.array(z.string()),
  classifications: z.array(z.string()),
  chains: z.array(z.string()),
});

const equipmentSchema = z.object({
  name: z.string(),
  imageSlug: z.string().nullable(),
  urn: z.string(),
});

const classificationSchema: z.ZodType<{
  name: string;
  parent?: string | null;
  children?: z.infer<typeof classificationSchema>[];
}> = z.lazy(() =>
  z.object({
    name: z.string(),
    parent: z.string().nullable().optional(),
    children: z.array(classificationSchema).optional(),
  })
);

const familySchema = z.object({
  urn: z.string(),
  name: z.string(),
  version: z.string(),
  type: z.enum(["strength", "mobility", "coordination"]),
});

const chainSchema = z.object({
  urn: z.string(),
  name: z.string(),
  families: z.array(z.string()),
  version: z.string(),
});

const exerciseDataSchema = z.object({
  exercise: z.array(exerciseSchema),
  equipment: z.array(equipmentSchema),
  classification: z.array(classificationSchema),
  family: z.array(familySchema),
  chain: z.array(chainSchema),
});

export type ExerciseData = z.infer<typeof exerciseDataSchema>;

export const getExerciseCollections = async (pathToExerciseService: string): Promise<ExerciseData> => {
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

    return exerciseDataSchema.parse(allCollections);
  } catch (error) {
    const newError = new ExerciseServiceCollectionReadError('Failed to retrieve exercise service collections', {
      cause: error
    });
    console.error(newError);
    throw newError;
  }
};