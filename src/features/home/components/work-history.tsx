import { SectionHeading } from "@/components/shared/section-heading"
import { jobs } from "@/config/jobs"
import { ExperienceShowcase, NoCurrentExperience } from "@/components/shared/experience-showcase"
import { AnimatedSection } from "@/components/shared/animated-section.tsx"

export function WorkHistory() {
    return (
        <AnimatedSection id="work-history" className="flex flex-col gap-y-6">
            <SectionHeading heading="Work history" />
            {jobs.length === 0 ? (
                <NoCurrentExperience />
            ) : (
                jobs.map((job, index) => <ExperienceShowcase key={index} experience={job} />)
            )}
        </AnimatedSection>
    )
}
