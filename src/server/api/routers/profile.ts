import { createTRPCRouter, protectedProcedure } from "../trpc"
import { db } from "~/server/db"

export const profileRouter = createTRPCRouter({
  getAll: protectedProcedure.query(
    async () => await db.query.profile.findMany(),
  ),
})
