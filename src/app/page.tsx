import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { api } from "~/trpc/server"

async function Profiles() {
  const profiles = await api.profile.getAll()

  return (
    <div>
      {profiles.map(({ id }) => (
        <span key={id}>{id}</span>
      ))}
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
        <Profiles />
      </SignedIn>
    </>
  )
}
