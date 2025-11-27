"use client"

import { usePathname } from "next/navigation"
import Header from "@/widgets/Public/Header"
import Footer from "@/widgets/Public/Footer"

export function PublicLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isGame = pathname.startsWith("/game")

    return (
        <div>
            {!isGame && <Header />}
            <main>{children}</main>
            {!isGame && <Footer />}
        </div>
    )
}