import { IconMailFilled } from "@tabler/icons-react"
import { siteConfig } from "@/config/site-config"
import { cn } from "@/lib/utils.ts"
import { buttonVariants } from "@/components/ui/button"
import { AnimatedSection } from "@/components/shared/animated-section.tsx"

export function Footer() {
    return (
        <AnimatedSection
            id="footer"
            className="border-t py-12 border-border-subtle text-center space-y-5 mt-8"
        >
            <h2 className="text-xl font-semibold">Interested in reaching out?</h2>
            <p className="text-muted-foreground mx-auto max-w-md">
                I’m open to opportunities, collaborations, and professional inquiries. Feel free to
                reach out directly.
            </p>
            <a
                href={`mailto:${siteConfig.socials.gmail}`}
                className={cn(
                    buttonVariants({ variant: "default" }),
                    "p-6 rounded-md tracking-wider flex items-center gap-x-1 mx-auto max-w-fit",
                )}
            >
                <IconMailFilled />
                Get in touch
            </a>
        </AnimatedSection>
    )
}
