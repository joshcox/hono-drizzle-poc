import { z } from "zod";

const UserSchema = z.object({
  uuid: z.string(),
  name: z.string(),
  email: z.string(),
});

export default UserSchema;
export type User = z.infer<typeof UserSchema>;
