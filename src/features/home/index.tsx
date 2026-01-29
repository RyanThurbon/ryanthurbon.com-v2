import { Education, Overview, Projects, Socials, WorkHistory } from "@/features/home/components"
import { Footer } from "@/components/shared/footer.tsx"

export function HomePage() {
    return (
        <>
            <Overview />
            <Socials />
            <Projects />
            <WorkHistory />
            <Education />
            <Footer />
        </>
    )
}
