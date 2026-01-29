import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/config/projects"
import { SectionHeading } from "@/components/shared/section-heading"
import { IconArrowRight } from "@tabler/icons-react"

export function Projects() {
    return (
        <section id="projects" className="flex flex-col gap-y-6">
            <SectionHeading heading="What I've built" />
            {projects.map((project, index) => (
                <a
                    key={index}
                    className="group hover:cursor-pointer"
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Card className="bg-transparent group-hover:bg-card transition-colors duration-200 px-0">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span className="group-hover:underline">{project.title}</span>
                                <IconArrowRight
                                    size={16}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                />
                            </CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                    </Card>
                </a>
            ))}
        </section>
    )
}
