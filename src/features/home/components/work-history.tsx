import { SectionHeading } from "@/components/shared/section-heading"
import { jobs } from "@/config/jobs"
import { ExperienceShowcase, NoCurrentExperience } from "@/components/shared/experience-showcase"

export function WorkHistory() {
    return (
        <section id="work-history" className="flex flex-col gap-y-6">
            <SectionHeading heading="Work history" />
            {jobs.length === 0 ? (
                <NoCurrentExperience />
            ) : (
                <div className="space-y-8">
                    {jobs.map((job, index) => (
                        <ExperienceShowcase key={index} experience={job} />
                    ))}
                </div>
            )}
        </section>
    )
}
