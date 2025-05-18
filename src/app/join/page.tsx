import AuthEntryStep from "./_components/AuthEntryStep"

export default function Join() {
  return (
    <div className="grid h-screen place-items-center bg-gray-200">
      <div className="w-xs space-y-4 rounded-lg bg-white p-4 shadow-lg">
        <AuthEntryStep />
      </div>
    </div>
  )
}
