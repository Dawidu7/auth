import { useAuth } from "../context"
import { type SignUpFormValues, signUpSchema } from "../schemas"
import PasswordStrength from "./PasswordStrength"
import { Form, FormButton, FormInput } from "~/components/Form"

export default function SignUpForm() {
  const { setCurrentStep } = useAuth()
  async function handleSubmit(values: SignUpFormValues) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(values)
    setCurrentStep("verification")
  }

  return (
    <Form onSubmit={handleSubmit} schema={signUpSchema}>
      {form => (
        <>
          <FormInput form={form} name="email" label="Email" />
          <FormInput
            form={form}
            name="password"
            label="Password"
            type="password"
          />
          <PasswordStrength value={form.watch("password")} />
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
