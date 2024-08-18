import { z } from "zod";

export default z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().default("postgres://user:password@localhost:5432/bluffcountrybeef"),
});
