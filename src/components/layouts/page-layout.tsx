import { PropsWithChildren } from "react"

export function PageLayout({ children }: PropsWithChildren) {
    return <div className="flex flex-col min-h-screen max-w-2xl mx-auto px-6.5">{children}</div>
}
