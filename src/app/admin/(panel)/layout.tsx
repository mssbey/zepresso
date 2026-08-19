import type { ReactNode } from "react"

import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { Toaster } from "@/components/ui/toast"

export default function AdminPanelLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh bg-void">
      <AdminSidebar />
      <div className="relative min-w-0 flex-1 overflow-x-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(80%_100%_at_15%_0%,rgb(196_122_69_/_0.10)_0%,transparent_60%)]"
        />
        <main className="relative px-6 py-10 sm:px-10">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </main>
      </div>
      <Toaster />
    </div>
  )
}
