import { PropsWithChildren } from "react"

export function PageLayout({ children }: PropsWithChildren) {
    return <div className="max-w-2xl mx-auto px-6.5">{children}</div>
}
