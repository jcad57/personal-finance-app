import { formatCurrency } from "@/_lib/helpers";

export default function RecurringBillOverviewItem({
    theme,
    total,
    label,
}: {
    theme: string;
    total: number;
    label: string;
}) {
    return (
        <div
            className="flex justify-between bg-[var(--beige-100)] py-[var(--spacing-md)] px-[var(--spacing-sm)] border-l-[4px] rounded-lg"
            style={{ borderColor: theme }}>
            <span className="text-[var(--grey-500)] text-[length:var(--font-size-sm)]">{label}</span>
            <span className="text-[var(--grey-900)] text-[length:var(--font-size-sm)] font-bold">
                {formatCurrency(total)}
            </span>
        </div>
    );
}
