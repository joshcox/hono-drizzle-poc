import z from "zod";
import { Context, Next } from "koa";

type ValidationResult = {
  success: boolean;
  error?: any;
};

type ValidationFunction = (body: unknown) => ValidationResult;

const validateBodyMiddleware = (validate: ValidationFunction) => async (ctx: Context, next: Next) => {
  const body = await ctx.request.body;
  const result = validate(body);
  if (!result.success) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  await next();
};

const validateBodyWithZod = (schema: z.ZodSchema) => validateBodyMiddleware((body: unknown): ValidationResult => {
  const result = schema.safeParse(body);
  return {
    success: result.success,
    error: result.success ? undefined : result.error,
  };
});

const isZodSchema = (schema: unknown): schema is z.ZodSchema => schema instanceof z.ZodSchema;

export default (schema: z.ZodSchema) =>
  (ctx: Context, next: Next) => {
    if (isZodSchema(schema)) {
      return validateBodyWithZod(schema)(ctx, next);
    }
    throw new Error("Invalid schema");
  };
