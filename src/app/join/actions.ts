"use server"

import type { PasswordlessFormValues } from "./schemas"

export async function handlePasswordlessSubmit(values: PasswordlessFormValues) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log(values)
}
