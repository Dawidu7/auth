"use client"

import { action } from "./actions"
import { emailSchema } from "./schemas"
import { Form, FormButton, FormInput } from "~/components/Form"

export default function Join() {
  return (
    <div className="grid h-screen place-items-center bg-gray-200">
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <Form action={action} schema={emailSchema}>
          {form => (
            <>
              <FormInput form={form} name="email" label="Email" />
              <FormButton>Continue with Passwordless</FormButton>
            </>
          )}
        </Form>
      </div>
    </div>
  )
}
