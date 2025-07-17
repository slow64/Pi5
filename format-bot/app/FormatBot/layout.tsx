import type { ReactNode } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { ChatButton } from "@/components/ui/chat-button"
import { AuthProvider } from "@/hooks/use-auth"

export default function FormatBotLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ChatButton />
        <Footer />
      </div>
    </AuthProvider>
  )
}
