import { handleSignUpSubmit } from "../actions"
import { signUpSchema } from "../schemas"
import { Form, FormButton, FormInput } from "~/components/Form"

export default function SignUpForm() {
  return (
    <Form action={handleSignUpSubmit} schema={signUpSchema}>
      {form => (
        <>
          <FormInput form={form} name="email" label="Email" />
          <FormInput
            form={form}
            name="password"
            label="Password"
            type="password"
          />
          <FormInput
            form={form}
            name="passwordConfirm"
            label="Confirm Password"
            type="password"
          />
          <FormButton>Sign up</FormButton>
        </>
      )}
    </Form>
  )
}
