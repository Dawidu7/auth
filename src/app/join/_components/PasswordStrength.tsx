import {
  type FirstOption,
  type Option,
  passwordStrength,
} from "check-password-strength"

const options: [FirstOption<string>, ...Option<string>[]] = [
  {
    id: 0,
    value: "Too weak",
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: "Weak",
    minDiversity: 2,
    minLength: 8,
  },
  {
    id: 2,
    value: "Medium",
    minDiversity: 4,
    minLength: 10,
  },
  {
    id: 3,
    value: "Strong",
    minDiversity: 4,
    minLength: 12,
  },
]

export default function PasswordStrength({ value }: { value: string }) {
  const result = value ? passwordStrength(value, options) : null

  const label = result?.value ?? ""
  const strength = result
    ? [
        { bar: "bg-red-500 w-1/4", text: "text-red-500" },
        { bar: "bg-orange-500 w-1/2", text: "text-orange-500" },
        { bar: "bg-yellow-500 w-3/4", text: "text-yellow-500" },
        { bar: "bg-green-500 w-full", text: "text-green-500" },
      ][result.id]!
    : { bar: "w-0", text: "text-muted-foreground" }

  return (
    <div className="text-muted-foreground text-sm">
      Password strength: <span className={strength.text}>{label}</span>
      <div className="bg-muted my-1 h-1 w-full rounded">
        <div className={`h-1 rounded transition-[width] ${strength.bar}`} />
      </div>
    </div>
  )
}
