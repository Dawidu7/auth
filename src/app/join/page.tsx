"use client"

import { action } from "./actions"
import { emailSchema } from "./schemas"
import { Form, FormInput } from "~/components/Form"
import { Button } from "~/components/ui/button"

export default function Join() {
  return (
    <div className="grid h-screen place-items-center bg-gray-200">
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <Form action={action} schema={emailSchema}>
          {form => (
            <>
              <FormInput form={form} name="email" label="Email" />
              <Button type="submit">Continue with Passwordless</Button>
            </>
          )}
        </Form>
      </div>
    </div>
  )
}
