import { z } from "zod"

export const passwordlessSchema = z.object({ email: z.string().email() })
export type PasswordlessFormValues = z.infer<typeof passwordlessSchema>

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})
export type SignInFormValues = z.infer<typeof signInSchema>

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  passwordConfirm: z.string(),
})
export type SignUpFormValues = z.infer<typeof signUpSchema>

export const verificationSchema = z.object({ code: z.string().length(6) })
export type VerificationStepSchema = z.infer<typeof verificationSchema>
