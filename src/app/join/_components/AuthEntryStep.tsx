import PasswordlessForm from "./PasswordlessForm"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
import { useState } from "react"
import { Button } from "~/components/ui/button"

function ActionButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button variant="link" size="sm" className={"mx-auto block"} {...props}>
      {children}
    </Button>
  )
}

export default function AuthEntryStep() {
  const [method, setMethod] = useState<"passwordless" | "sign-in" | "sign-up">(
    "passwordless",
  )
  const form: Record<typeof method, React.JSX.Element> = {
    passwordless: <PasswordlessForm />,
    "sign-in": <SignInForm />,
    "sign-up": <SignUpForm />,
  }

  return (
    <>
      {form[method]}
      <ActionButton
        onClick={() =>
          setMethod(prev =>
            prev === "passwordless" ? "sign-in" : "passwordless",
          )
        }
      >
        Use {method === "passwordless" ? "Password" : "Passwordless"} instead
      </ActionButton>
      {method === "sign-in" && <ActionButton>Forgot Password?</ActionButton>}
      {method !== "passwordless" && (
        <ActionButton
          onClick={() =>
            setMethod(prev => (prev === "sign-in" ? "sign-up" : "sign-in"))
          }
        >
          {method === "sign-in"
            ? "Don't have an account? Sign up"
            : "Already have an account? Sign in"}
        </ActionButton>
      )}
    </>
  )
}
