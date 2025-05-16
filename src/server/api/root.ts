import { profileRouter } from "~/server/api/routers/profile"
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc"

export const appRouter = createTRPCRouter({
  profile: profileRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)
