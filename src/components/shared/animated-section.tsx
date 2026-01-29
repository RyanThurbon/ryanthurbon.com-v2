import { HTMLMotionProps, motion, Variants } from "motion/react"
import { Children, isValidElement, ReactNode } from "react"

export const sectionAnimationVariants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.15,
        },
    },
} satisfies Variants

export const childAnimationVariants = {
    hidden: {
        opacity: 0,
        y: 12,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut",
        },
    },
} satisfies Variants

type AnimatedSectionProps = {
    children: ReactNode
} & HTMLMotionProps<"section">

export function AnimatedSection({ children, ...props }: AnimatedSectionProps) {
    return (
        <motion.section
            {...props}
            variants={sectionAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {Children.toArray(children).map((child, index) => {
                if (!isValidElement(child)) return child

                if (Children.count(children) === 1) return child

                return (
                    <motion.div key={index} variants={childAnimationVariants}>
                        {child}
                    </motion.div>
                )
            })}
        </motion.section>
    )
}
