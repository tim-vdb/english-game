import { z } from "zod";

export const TeamsSchema = z.object({
    name: z.string().min(1),
})