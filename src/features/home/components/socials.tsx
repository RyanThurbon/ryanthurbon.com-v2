import { Icons } from "@/components/shared/icons"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site-config"
import { IconMailForward } from "@tabler/icons-react"

export function Socials() {
    return (
        <section id="socials">
            <Separator />
            <div className="flex flex-wrap items-center justify-center p-6 gap-x-8 gap-y-4 text-muted-foreground text-sm">
                <a
                    href={`mailto:${siteConfig.socials.gmail}`}
                    className="group flex items-center gap-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Send me an Email"
                >
                    <IconMailForward className="size-4 text-foreground" title="Gmail" />
                    <span className="group-hover:text-foreground transition-colors">Email</span>
                </a>
                <Separator orientation="vertical" className="hidden sm:inline" />
                <a
                    href={siteConfig.socials.github}
                    className="group flex items-center gap-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on GitHub"
                >
                    <Icons.github className="size-4 text-foreground" />
                    <span className="group-hover:text-foreground transition-colors">GitHub</span>
                </a>
                <Separator orientation="vertical" className="hidden sm:inline" />
                <a
                    href={siteConfig.socials.linkedIn}
                    className="group flex items-center gap-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on Linkedin"
                >
                    <Icons.linkedIn className="size-4 text-foreground" />
                    <span className="group-hover:text-foreground transition-colors">Linkedin</span>
                </a>
            </div>
            <Separator />
        </section>
    )
}
