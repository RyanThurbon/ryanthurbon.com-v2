import { AnimatedSection } from "@/components/shared/animated-section.tsx"
import { ExperienceShowcase } from "@/components/shared/experience-showcase"
import { SectionHeading } from "@/components/shared/section-heading"
import { jobs } from "@/config/jobs"

export function WorkHistory() {
    return (
        <AnimatedSection id="work-history" className="flex flex-col gap-y-6">
            <SectionHeading heading="Work history" />
            {jobs.map((job, index) => (
                <ExperienceShowcase key={index} experience={job} />
            ))}
        </AnimatedSection>
    )
}
