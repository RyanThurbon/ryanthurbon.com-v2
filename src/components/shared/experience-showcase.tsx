import { Separator } from "@/components/ui/separator"
import { EducationItem } from "@/config/education"
import { isJobItem, JobItem } from "@/config/jobs.ts"

type ExperienceItem = EducationItem | JobItem

export function ExperienceShowcase({ experience }: { experience: ExperienceItem }) {
    return (
        <a
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${experience.title}`}
            className="grid grid-cols-[auto_1fr] gap-x-4 group hover:cursor-pointer transition-transform duration-200 hover:translate-x-1"
        >
            <ExperienceTimeline />
            <ExperienceOverview experience={experience} />
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

function ExperienceOverview({ experience }: { experience: ExperienceItem }) {
    const roleOrQualification = isJobItem(experience) ? experience.role : experience.qualification

    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1">
                <h3 className="font-medium">{experience.title}</h3>
                <span className="text-xs text-muted-foreground">{experience.period}</span>
                <p className="text-sm text-muted-subtle">{roleOrQualification}</p>
            </div>
            <p className="text-sm text-muted-foreground">{experience.description}</p>
        </div>
    )
}
