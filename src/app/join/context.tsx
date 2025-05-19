import AuthEntryStep from "./_components/AuthEntryStep"
import AuthVerificationStep from "./_components/AuthVerificationStep"
import { useSignIn, useSignUp } from "@clerk/nextjs"
import { createContext, useContext, useState } from "react"

export type Step = "passwordless" | "sign-in" | "sign-up" | "verification"

const AuthContext = createContext<{
  signIn: ReturnType<typeof useSignIn> | null
  signUp: ReturnType<typeof useSignUp> | null
  currentStep: Step
  setCurrentStep: React.Dispatch<React.SetStateAction<Step>>
}>({
  signIn: null,
  signUp: null,
  currentStep: "passwordless",
  setCurrentStep: () => {},
})

export function AuthProvider({ children }: Children) {
  const [currentStep, setCurrentStep] = useState<Step>("passwordless")
  const signIn = useSignIn()
  const signUp = useSignUp()

  return (
    <AuthContext.Provider
      value={{ signIn, signUp, currentStep, setCurrentStep }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export function StepRouter() {
  const { currentStep } = useAuth()
  const steps: Record<typeof currentStep, React.JSX.Element> = {
    passwordless: <AuthEntryStep />,
    "sign-in": <AuthEntryStep />,
    "sign-up": <AuthEntryStep />,
    verification: <AuthVerificationStep />,
  }

  return steps[currentStep]
}
