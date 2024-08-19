import Database, * as sqlite from "better-sqlite3";
import { existsSync, mkdirSync } from "fs";
import { homedir } from "os";
import { join } from "path";
import { ExerciseDB } from "../../domain";

const systemFolder = join(homedir(), "exercisedb_files");

if (!existsSync(systemFolder)) {
  mkdirSync(systemFolder);
}

const getExerciseDBFilePath = (filename: string) => join(systemFolder, filename);

export const start = (exerciseDB: ExerciseDB): sqlite.Database => 
  new Database(getExerciseDBFilePath(exerciseDB.filename));