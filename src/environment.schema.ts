import { z } from "zod";

export default z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_PATH: z.string(),
});