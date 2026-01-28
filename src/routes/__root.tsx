import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import appCss from "../styles.css?url"
import type { ReactNode } from "react"

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
                {children}
                <Scripts />
            </body>
        </html>
    )
}
