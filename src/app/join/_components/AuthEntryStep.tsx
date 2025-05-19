import { useAuth } from "../context"
import AuthStep from "./AuthStep"
import PasswordlessForm from "./PasswordlessForm"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
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
  const { currentStep, setCurrentStep } = useAuth()
  const form: Partial<Record<typeof currentStep, React.JSX.Element>> = {
    passwordless: <PasswordlessForm />,
    "sign-in": <SignInForm />,
    "sign-up": <SignUpForm />,
  }

  return (
    <AuthStep title="Join Now!">
      {form[currentStep]}
      <ActionButton
        onClick={() => {
          setCurrentStep(prev =>
            prev === "passwordless" ? "sign-in" : "passwordless",
          )
        }}
      >
        Use {currentStep === "passwordless" ? "Password" : "Passwordless"}{" "}
        instead
      </ActionButton>
      {currentStep === "sign-in" && (
        <ActionButton>Forgot Password?</ActionButton>
      )}
      {currentStep !== "passwordless" && (
        <ActionButton
          onClick={() =>
            setCurrentStep(prev => (prev === "sign-in" ? "sign-up" : "sign-in"))
          }
        >
          {currentStep === "sign-in"
            ? "Don't have an account? Sign up"
            : "Already have an account? Sign in"}
        </ActionButton>
      )}
    </AuthStep>
  )
}
