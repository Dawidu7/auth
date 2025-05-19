"use client"

import AuthEntryStep from "./_components/AuthEntryStep"
import AuthVerificationStep from "./_components/AuthVerificationStep"

export default function Join() {
  return (
    <div className="grid h-screen place-items-center bg-gray-200">
      <div className="w-xs space-y-4 rounded-lg bg-white p-4 shadow-lg">
        <AuthVerificationStep />
        {/* <AuthEntryStep /> */}
      </div>
    </div>
  )
}
