import { auth } from "@clerk/nextjs/server"
import { TRPCError, initTRPC } from "@trpc/server"
import superjson from "superjson"
import { ZodError } from "zod"

export const createTRPCContext = async (opts: { headers: Headers }) => {
  const { userId } = await auth()
  return {
    userId,
    ...opts,
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

export const createCallerFactory = t.createCallerFactory

export const createTRPCRouter = t.router

const authMiddleware = t.middleware(({ next, ctx }) => {
  if (!ctx.userId) throw new TRPCError({ code: "UNAUTHORIZED" })

  return next({ ctx })
})

export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(authMiddleware)
