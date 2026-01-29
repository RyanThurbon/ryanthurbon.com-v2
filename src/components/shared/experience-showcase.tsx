import { Separator } from "@/components/ui/separator"
import { EducationItem } from "@/config/education"
import { JobItem } from "@/config/jobs.ts"
import { Activity } from "react"
import { siteConfig } from "@/config/site-config"

type ExperienceItem = EducationItem | JobItem

export function ExperienceShowcase({
    experience,
    description,
}: {
    experience: ExperienceItem
    description?: string
}) {
    return (
        <a
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${experience.title}`}
            className="grid grid-cols-[auto_1fr] gap-x-4 group hover:cursor-pointer transition-transform duration-200 hover:translate-x-1"
        >
            <ExperienceTimeline />
            <ExperienceOverview
                title={experience.title}
                roleOrQualification={
                    "role" in experience ? experience.role : experience.qualification
                }
                description={"description" in experience ? experience.description : description}
            />
        </a>
    )
}

export function NoCurrentExperience() {
    return (
        <a
            href={siteConfig.cvSrc}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View or download CV"
            className="grid grid-cols-[auto_1fr] gap-x-4 group hover:cursor-pointer transition-transform duration-200 hover:translate-x-1"
        >
            <ExperienceTimeline />
            <ExperienceOverview
                title="No current professional experience"
                roleOrQualification={siteConfig.openToWork ? "Open to work" : "Not open to work"}
                description="Seeking internships or graduate opportunities in Software Engineering"
            />
        </a>
    )
}

function ExperienceTimeline() {
    return (
        <div className="relative flex justify-center">
            <div className="absolute top-2 z-10 size-2 rounded-full bg-primary" />
            <Separator
                orientation="vertical"
                className="absolute top-0 h-full group-hover:bg-primary transition-colors duration-200"
            />
        </div>
    )
}

function ExperienceOverview({
    title,
    roleOrQualification,
    description,
}: {
    title: string
    roleOrQualification: string
    description?: string
}) {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-muted-subtle">{roleOrQualification}</p>
            </div>
            <Activity mode={description ? "visible" : "hidden"}>
                <p className="text-sm text-muted-foreground">{description}</p>
            </Activity>
        </div>
    )
}
