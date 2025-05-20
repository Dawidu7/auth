"use client"

import { useAuth } from "../context"
import { type VerificationStepSchema, verificationSchema } from "../schemas"
import AuthStep from "./AuthStep"
import { useRouter } from "next/navigation"
import { Form, FormButton } from "~/components/Form"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp"

export default function AuthVerificationStep() {
  const { signUp } = useAuth()
  const router = useRouter()
  const length = 6

  async function handleSubmit({ code }: VerificationStepSchema) {
    if (!signUp?.isLoaded) return

    try {
      const signUpAttempt = await signUp.signUp.attemptEmailAddressVerification(
        { code },
      )

      if (signUpAttempt.status !== "complete") {
        console.error(JSON.stringify(signUpAttempt, null, 2))
        return
      }

      await signUp.setActive({ session: signUpAttempt.createdSessionId })
      router.push("/")
    } catch (e) {
      console.error(JSON.stringify(e, null, 2))
    }
  }

  return (
    <AuthStep
      title="OTP Verification"
      description="Enter the 6-digit code sent to your email."
    >
      <Form onSubmit={handleSubmit} schema={verificationSchema}>
        {form => (
          <>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="mx-auto w-fit">
                  <FormControl>
                    <InputOTP
                      maxLength={length}
                      {...field}
                      onChange={async value => {
                        field.onChange(value)
                        if (value.length === length)
                          await form.handleSubmit(handleSubmit)()
                      }}
                    >
                      <InputOTPGroup>
                        {Array.from({ length }).map((_, i) => (
                          <InputOTPSlot key={i} index={i} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormButton className="mx-auto block w-fit">Verify</FormButton>
          </>
        )}
      </Form>
    </AuthStep>
  )
}
