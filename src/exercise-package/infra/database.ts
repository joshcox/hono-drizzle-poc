import { existsSync, mkdirSync } from "fs";
import { homedir } from "os";
import { join } from "path";

const systemFolder = join(homedir(), "exercise_package");

if (!existsSync(systemFolder)) {
  mkdirSync(systemFolder);
}

const getExerciseDBFilePath = (filename: string) => join(systemFolder, filename);