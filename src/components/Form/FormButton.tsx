import { Button } from "../ui/button"
import { useFormState } from "react-hook-form"
import { cn } from "~/lib/utils"

type ButtonProps = React.ComponentProps<typeof Button>

export default function FormButton({
  children,
  className,
  ...props
}: ButtonProps) {
  const { isSubmitting } = useFormState()

  return (
    <Button
      type="submit"
      {...props}
      className={cn("w-full", className)}
      isLoading={isSubmitting}
    >
      {children}
    </Button>
  )
}
