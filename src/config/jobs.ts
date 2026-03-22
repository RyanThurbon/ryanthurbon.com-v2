import {
    WithQualification,
    WithRole,
    WithTimePeriod,
    WithTitleDescription,
    WithURL,
} from "@/config/types"

export interface JobItem extends WithTitleDescription, WithRole, WithTimePeriod, WithURL {}

export const jobs: JobItem[] = [
    {
        title: "Sintrex Integration Services",
        description:
            "Sintrex is the largest monitoring specialist company in Africa. Sintrex monitors and measures just about anything, helping you gain valuable insight into your IT infrastructure.",
        role: "Developer Intern",
        url: "https://sintrex.com/",
        period: "2026 - Present",
        durationInYears: 0,
    },
]

export function isJobItem(item: WithRole | WithQualification): item is WithRole {
    return "role" in item
}
