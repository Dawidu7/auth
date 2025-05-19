type AuthStepProps = {
  title: string | React.ReactNode
  description?: string | React.ReactNode
} & Children

export default function AuthStep({
  children,
  title,
  description,
}: AuthStepProps) {
  return (
    <div className="grid place-items-center gap-4 [&>*]:w-full">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && <p className="text-xs font-light">{description}</p>}
      </div>
      {children}
    </div>
  )
}
