import * as z from "zod";

export const createCommentSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  comment: z.string().optional(),
});
