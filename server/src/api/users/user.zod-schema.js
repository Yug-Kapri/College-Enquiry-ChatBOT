import * as z from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(8),
});

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
