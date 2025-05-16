import { ClerkProvider } from "@clerk/nextjs"
import { type Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "~/styles/globals.css"
import { TRPCReactProvider } from "~/trpc/react"

export const metadata: Metadata = {
  title: "Auth",
}

const openSans = Open_Sans({ subsets: ["latin"] })

export default function RootLayout({ children }: Children) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>
        <html lang="en" className={`${openSans.className}`}>
          <body>{children}</body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  )
}
