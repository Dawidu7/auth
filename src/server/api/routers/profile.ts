import { createTRPCRouter, publicProcedure } from "../trpc"
import { db } from "~/server/db"

export const profileRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => await db.query.profile.findMany()),
})
