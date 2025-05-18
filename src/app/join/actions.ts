"use server"

import { type EmailFormValues } from "./schemas"

export async function action(values: EmailFormValues) {
  console.log(values)
}
