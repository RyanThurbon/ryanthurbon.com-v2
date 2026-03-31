import { AnimatedSection } from "@/components/shared/animated-section.tsx"
import { ExperienceShowcase } from "@/components/shared/experience-showcase"
import { SectionHeading } from "@/components/shared/section-heading"
import { education } from "@/config/education"

export function Education() {
    return (
        <AnimatedSection id="education" className="flex flex-col gap-y-6">
            <SectionHeading heading="Education" />
            {education.map((education, index) => (
                <ExperienceShowcase key={index} experience={education} />
            ))}
        </AnimatedSection>
    )
}
