import { z } from 'zod';

export const schema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
});

export default schema.parse(process.env);
