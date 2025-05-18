"use client"

import { action } from "./actions"
import { emailSchema } from "./schemas"
import { Form } from "~/components/Form"
import { Button } from "~/components/ui/button"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"

export default function Join() {
  return (
    <div className="grid h-screen place-items-center bg-gray-200">
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <Form action={action} schema={emailSchema}>
          {form => (
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button>Continue with Passwordless</Button>
            </>
          )}
        </Form>
      </div>
    </div>
  )
}
