import { db } from "~/server/db"

export default async function Home() {
  const profiles = await db.query.profile.findMany()

  return (
    <div>
      {profiles.map(({ id }) => (
        <span key={id}>{id}</span>
      ))}
    </div>
  )
}
