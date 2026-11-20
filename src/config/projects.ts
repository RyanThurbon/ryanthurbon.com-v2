import { WithTitleDescription, WithURL } from "@/config/types.ts"

export interface ProjectItem extends WithTitleDescription, WithURL {
    stack: string[]
    source: string
}

export const projects: ProjectItem[] = [
	{
        title: "Shelfwatch",
        description: "Stats, charts and changes for every game on Steam, so you can see what's happening on Steam as it happens.",
        url: "https://shelfwatch.net/",
        stack: ["Vue", "Bun", "Postgres", "Typescript", "TailwindCSS", "Tanstack"],
        source: "https://github.com/RyanThurbon",
    },
    {
        title: "Movify",
        description:
            "A movie and TV show discovery site that lists popular and upcoming movies and shows. Built with the TMDb API.",
        url: "https://movify-three.vercel.app/",
        stack: ["React", "Typescript", "TailwindCSS", "Tanstack"],
        source: "https://github.com/RyanThurbon/movify",
    },
    {
        title: "Free2Play",
        description:
            "A site that helps gamers discover the best free PC and browser games, powered by the FreeToGame API.",
        url: "https://free2play-iota.vercel.app/",
        stack: ["React", "Typescript", "TailwindCSS", "Tanstack"],
        source: "https://github.com/RyanThurbon/free-2-play",
    },
    {
        title: "TechTrove",
        description:
            "A personal Hacker News reader that helps me stay up to date with the latest community news. Built with the HN API.",
        url: "https://techtrove-delta.vercel.app/",
        stack: ["React", "Typescript", "TailwindCSS", "Tanstack"],
        source: "https://github.com/RyanThurbon/tech-trove",
    },
]
