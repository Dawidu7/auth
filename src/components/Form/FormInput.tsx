import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import type { JSX } from "react"
import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form"
import { cn } from "~/lib/utils"

type FormInputProps<T extends FieldValues> = {
  form: UseFormReturn<T>
  name: FieldPath<T>
  label: string
  description?: JSX.Element | string
  isOptional?: boolean
} & Omit<React.ComponentProps<typeof Input>, "name" | "form">

export default function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  description,
  isOptional,
  className,
  ...props
}: FormInputProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="relative">
          <FormControl>
            <Input
              {...props}
              {...field}
              className={cn("peer", className)}
              placeholder=" "
            />
          </FormControl>
          <FormLabel className="text-muted-foreground peer-focus-visible:text-primary absolute -top-2.5 text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus-visible:-top-2.5 peer-focus-visible:text-xs">
            {isOptional ? `${label} (Optional)` : label}
          </FormLabel>
          {!fieldState.error ? (
            description && <FormDescription>{description}</FormDescription>
          ) : (
            <FormMessage />
          )}
        </FormItem>
      )}
    />
  )
}
