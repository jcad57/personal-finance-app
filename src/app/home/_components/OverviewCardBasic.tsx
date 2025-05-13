import { formatCurrency } from "@/_lib/helpers";

export default function OverviewCardBasic({
    title,
    value,
    primary,
}: {
    title: string;
    value: number;
    primary?: boolean;
}) {
    return (
        <div
            className={`flex flex-col md:grow gap-[var(--spacing-xs)] p-[var(--card-padding)] rounded-[var(--card-border-radius)] ${
                primary ? "bg-[var(--grey-900)]" : "bg-[var(--card-bg)]"
            }`}>
            <h2
                className={`text-[length:var(--font-size-sm)] text-[var(--grey-500)] ${
                    primary && "text-[var(--white)]"
                }`}>
                {title}
            </h2>
            <p className={`text-[length:var(--font-size-xl)] font-bold ${primary && "text-[var(--white)]"}`}>
                {formatCurrency(value)}
            </p>
        </div>
    );
}
