import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils.ts"
import { IconChevronDown } from "@tabler/icons-react"
import { buttonVariants } from "@/components/ui/button"

const navItems = [
    {
        label: "Guestbook",
        href: "/",
    },
    {
        label: "About",
        href: "/",
    },
]

export function Navbar() {
    return (
        <header id="navigation" className="fixed top-0 w-full z-50 bg-background">
            <div className="max-w-2xl mx-auto px-4">
                <nav className="flex justify-between items-center h-14">
                    <Link
                        to="/"
                        aria-label="Home"
                        className={cn(buttonVariants({ variant: "ghost" }), "font-medium")}
                    >
                        RT
                    </Link>
                    <DesktopView />
                    <MobileView />
                </nav>
            </div>
        </header>
    )
}

function DesktopView() {
    return (
        <div className="hidden md:flex md:items-center md:gap-x-1">
            {navItems.map((item, index) => (
                <Link
                    key={index}
                    to={item.href}
                    aria-label={item.label}
                    className={cn(buttonVariants({ variant: "ghost" }), "text-muted-foreground")}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    )
}

function MobileView() {
    return (
        <Sheet>
            <SheetTrigger
                className="flex items-center gap-x-2 text-sm md:hidden p-1"
                aria-label="Open menu"
            >
                Menu
                <IconChevronDown className="size-3 text-muted-foreground" />
            </SheetTrigger>
            <SheetContent side="top" className="py-2">
                <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription className="text-foreground">ryanthurbon.com</SheetDescription>
                </SheetHeader>
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.href}
                        aria-label={item.label}
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "inline-block text-muted-foreground px-4",
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </SheetContent>
        </Sheet>
    )
}
