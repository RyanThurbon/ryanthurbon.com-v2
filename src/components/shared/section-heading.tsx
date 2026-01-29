export function SectionHeading({ heading }: { heading: string }) {
    return (
        <h2 className="text-muted-subtle text-xs font-medium tracking-wider uppercase">
            {heading}
        </h2>
    )
}
