import { SectionHeading } from "@/components/shared/section-heading"
import { ExperienceShowcase } from "@/components/shared/experience-showcase"
import { education } from "@/config/education"

export function Education() {
    return (
        <section id="education" className="flex flex-col gap-y-6">
            <SectionHeading heading="Education" />
            <div className="space-y-8">
                {education.map((education, index) => (
                    <ExperienceShowcase key={index} experience={education} />
                ))}
            </div>
        </section>
    )
}
