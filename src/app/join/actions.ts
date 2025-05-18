"use server"

import { type EmailFormValues } from "./schemas"

export async function action(values: EmailFormValues) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log(values)
}
