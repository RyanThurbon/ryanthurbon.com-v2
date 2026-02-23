import { AnimatedSection } from "@/components/shared/animated-section.tsx"
import { Footer } from "@/components/shared/footer.tsx"
import { SectionHeading } from "@/components/shared/section-heading.tsx"

const sections = [
    "The coding journey started back in high school with Delphi, sparking a lasting love for learning and building. Free time often means exploring new languages and frameworks — these days, it’s mostly React and modern web tech.",

    "I build tools that make life easier, approaching every project with curiosity and persistence.I focus on clean, maintainable systems and simple, effective solutions, where usability comes first for both developers and users.",

    "Tackling challenges that require creative problem-solving and careful thinking is where the work gets exciting.",

    "Collaboration and communication are key to building great software. I value sharing ideas, iterating with feedback, and contributing to projects that have a real impact.",
]

export function AboutPage() {
    return (
        <AnimatedSection id="about" className="flex flex-col gap-y-6">
            <SectionHeading heading="About me" />
            <div className="font-medium text-lg capitalize tracking-wide">Hi! I'm Ryan Thurbon</div>
            {sections.map((section, index) => (
                <p key={index} className="text-muted-foreground">
                    {section}
                </p>
            ))}
            <Footer />
        </AnimatedSection>
    )
}
