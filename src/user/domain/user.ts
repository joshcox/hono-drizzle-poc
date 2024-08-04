import { z } from "zod";

const UserSchema = z.object({
  uuid: z.string(),
  name: z.string(),
});

export default UserSchema;
