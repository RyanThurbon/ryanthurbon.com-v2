import {
    WithQualification,
    WithRole,
    WithTimePeriod,
    WithTitleDescription,
    WithURL,
} from "@/config/types"

export interface EducationItem
    extends WithTitleDescription, WithQualification, WithTimePeriod, WithURL {}

export const education: EducationItem[] = [
    {
        title: "Sutherland High School",
        url: "https://www.sutherlandhs.co.za/",
        qualification: "National Senior Certificate",
        period: "2018 – 2022",
        durationInYears: 5,
        description:
            "Developed foundational problem-solving and technical skills that sparked my interest in software development.",
    },
    {
        title: "Belgium Campus ITversity",
        url: "https://www.belgiumcampus.ac.za/",
        qualification: "Bachelor of Information Technology",
        period: "2023 – 2025",
        durationInYears: 3,
        description:
            "Developed practical software skills through project-based learning in IT and software development.",
    },
]

export function isEducationItem(item: WithRole | WithQualification): item is WithQualification {
    return "qualification" in item
}
