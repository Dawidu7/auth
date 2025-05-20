import { useAuth } from "../context"
import { type SignUpFormValues, signUpSchema } from "../schemas"
import PasswordStrength from "./PasswordStrength"
import { Form, FormButton, FormInput } from "~/components/Form"

export default function SignUpForm() {
  const { signUp, setCurrentStep } = useAuth()

  async function handleSubmit(values: SignUpFormValues) {
    if (!signUp?.isLoaded) return

    try {
      await signUp.signUp.create({
        emailAddress: values.email,
        password: values.password,
      })

      await signUp.signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      })

      setCurrentStep("verification")
    } catch (e) {
      console.error(JSON.stringify(e, null, 2))
    }
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
