import { z } from "zod";

export const createShowZodSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(20),
  thumbnail: z.string(),
  date: z.date(),
});
