import { useAuth } from "../context"
import { type SignInFormValues, signInSchema } from "../schemas"
import { useRouter } from "next/navigation"
import { Form, FormButton, FormInput } from "~/components/Form"

export default function SignInForm() {
  const { signIn } = useAuth()
  const router = useRouter()

  async function handleSubmit(values: SignInFormValues) {
    if (!signIn?.isLoaded) return

    try {
      const signInAttempt = await signIn.signIn.create({
        identifier: values.email,
        password: values.password,
      })

      if (signInAttempt.status !== "complete") {
        console.error(JSON.stringify(signInAttempt, null, 2))
        return
      }

      await signIn.setActive({ session: signInAttempt.createdSessionId })
      router.push("/")
    } catch (e) {
      console.error(JSON.stringify(e, null, 2))
    }
  }

  return (
    <Form onSubmit={handleSubmit} schema={signInSchema}>
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
