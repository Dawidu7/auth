import { handleSignInSubmit } from "../actions"
import { signInSchema } from "../schemas"
import { Form, FormButton, FormInput } from "~/components/Form"

export default function SignInForm() {
  return (
    <Form onSubmit={handleSignInSubmit} schema={signInSchema}>
      {form => (
        <>
          <FormInput form={form} name="email" label="Email" />
          <FormInput
            form={form}
            name="password"
            label="Password"
            type="password"
          />
          <FormButton>Sign in</FormButton>
        </>
      )}
    </Form>
  )
}
