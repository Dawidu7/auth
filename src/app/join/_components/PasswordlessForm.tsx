import { handlePasswordlessSubmit } from "../actions"
import { passwordlessSchema } from "../schemas"
import { Form, FormButton, FormInput } from "~/components/Form"

export default function PasswordlessForm() {
  return (
    <Form onSubmit={handlePasswordlessSubmit} schema={passwordlessSchema}>
      {form => (
        <>
          <FormInput form={form} name="email" label="Email" />
          <FormButton>Continue with Passwordless</FormButton>
        </>
      )}
    </Form>
  )
}
