import { Footer } from "@/components/shared/footer.tsx"
import { Education, Overview, Projects, Socials, WorkHistory } from "@/features/home/components"

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
