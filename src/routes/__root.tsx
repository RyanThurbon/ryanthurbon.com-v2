import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import appCss from "../styles.css?url"
import type { ReactNode } from "react"
import { PageLayout } from "@/components/layouts/page-layout"
import { Navbar } from "@/components/shared/navbar"

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                title: "Ryan Thurbon",
            },
        ],
        links: [
            {
                rel: "stylesheet",
                href: appCss,
            },
        ],
    }),
    shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head>
                <HeadContent />
            </head>
            <body>
                <Navbar />
                <PageLayout>
                    <main className="py-24">
                        <div className="flex flex-col gap-y-16">{children}</div>
                    </main>
                </PageLayout>
                <Scripts />
            </body>
        </html>
    )
}
