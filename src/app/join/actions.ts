"use server"

import type { PasswordlessFormValues, SignInFormValues } from "./schemas"

export async function handlePasswordlessSubmit(values: PasswordlessFormValues) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log(values)
}

export async function handleSignInSubmit(values: SignInFormValues) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log(values)
}
