import { api } from "~/trpc/server"

export default async function Home() {
  const profiles = await api.profile.getAll()

  return (
    <div>
      {profiles.map(({ id }) => (
        <span key={id}>{id}</span>
      ))}
    </div>
  )
}
