import { formatCurrency } from "@/_lib/helpers";
import { SecondaryCardProps } from "@/_lib/types";

export default function SecondaryCard({ children, childrenTop, title, value, accent }: SecondaryCardProps) {
    return (
        <div
            className={`flex flex-col md:grow gap-[var(--spacing-xs)] p-[var(--card-padding)] rounded-[var(--card-border-radius)] ${
                accent ? "bg-[var(--grey-900)]" : "bg-[var(--card-bg)]"
            }`}>
            {childrenTop && children}
            <h2
                className={`text-[length:var(--font-size-sm)] text-[var(--grey-500)] ${
                    accent && "text-[var(--white)]"
                }`}>
                {title}
            </h2>
            <p className={`text-[length:var(--font-size-xl)] font-bold ${accent && "text-[var(--white)]"}`}>
                {formatCurrency(value)}
            </p>
            {!childrenTop && children}
        </div>
    );
}
