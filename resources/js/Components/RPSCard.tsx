import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface RPSCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
    color?: "primary" | "secondary" | "accent";
}

const RPSCard = ({
    title,
    description,
    icon,
    href,
    color = "primary",
}: RPSCardProps) => {
    const colorClasses = {
        primary:
            "from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40",
        secondary:
            "from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/40",
        accent: "from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40",
    };

    const iconClasses = {
        primary: "text-primary bg-primary/10",
        secondary: "text-secondary bg-secondary/10",
        accent: "text-accent bg-accent/10",
    };

    return (
        <Link href={href} className="block h-full group">
            <div
                className={`card-academic bg-gradient-to-br ${colorClasses[color]}
                group-hover:shadow-medium transition-all duration-300
                h-full flex flex-col p-5 rounded-xl border`}
            >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div
                        className={`p-3 rounded-lg ${iconClasses[color]}
                        group-hover:scale-110 transition-transform`}
                    >
                        {icon}
                    </div>
                    <ChevronRight className="w-5 h-5 transition-colors text-muted-foreground group-hover:text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold transition-colors text-card-foreground group-hover:text-primary">
                    {title}
                </h3>
                <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default RPSCard;
