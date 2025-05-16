import { pgTable as table, text } from "drizzle-orm/pg-core"

export const profile = table("profile", {
  id: text("id").primaryKey(),
})
