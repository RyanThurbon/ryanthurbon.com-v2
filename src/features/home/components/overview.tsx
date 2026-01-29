import { AnimatedSection } from "@/components/shared/animated-section.tsx"

export function Overview() {
    return (
        <AnimatedSection id="overview" className="flex flex-col gap-y-2">
            <h1 className="font-medium text-lg capitalize">Junior Software Developer</h1>
            <p className="text-muted-foreground">
                Focused on building software that’s useful, maintainable and practical.
            </p>
        </AnimatedSection>
    )
}
