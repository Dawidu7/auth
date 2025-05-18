import { z } from "zod"

export const emailSchema = z.object({ email: z.string().email() })
export type EmailFormValues = z.infer<typeof emailSchema>
