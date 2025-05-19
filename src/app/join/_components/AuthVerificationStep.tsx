import { type VerificationStepSchema, verificationSchema } from "../schemas"
import AuthStep from "./AuthStep"
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
  const length = 6

  async function handleSubmit(values: VerificationStepSchema) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
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
