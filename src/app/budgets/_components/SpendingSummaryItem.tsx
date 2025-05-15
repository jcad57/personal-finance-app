import { formatCurrency } from "@/_lib/helpers";
import VerticalAccent from "@/components/Layout/VerticalAccent";

export default async function SpendingSummaryItem({
    category,
    maximum,
    theme,
}: {
    category: string;
    maximum: number;
    theme: string;
}) {
    return (
        <div className="flex justify-between not-first:border-t-[1px] [&:not(:first-child):not(:last-child)]:py-[var(--spacing-sm)] first:pb-[var(--spacing-sm)] last:pt-[var(--spacing-sm)] border-[var(--grey-100)]">
            <div className="flex">
                <VerticalAccent theme={theme} />
                <span className="ml-[16px] text-[var(--grey-500)] text-[length:var(--font-size-sm)]">{category}</span>
            </div>
            <div className="flex items-center gap-[8px]">
                <span className="font-bold text-[var(--grey-900)] text-[length:var(--font-size-md)]">
                    {formatCurrency(75)}{" "}
                </span>
                <span className="text-[var(--grey-500)] text-[length:var(--font-size-xs)]">
                    of {maximum ? formatCurrency(maximum) : 0}
                </span>
            </div>
        </div>
    );
}
