import { formatCurrency, formatDate } from "@/_lib/helpers";
import Image from "next/image";

export default function LatestSpendingItem({
    avatar,
    name,
    amount,
    date,
}: {
    avatar: string;
    name: string;
    amount: number;
    date: string | number;
}) {
    return (
        <div className="flex justify-between not-first:border-t-[1px] last:pt-[var(--spacing-xs)] [&:not(:first-child):not(:last-child)]:py-[var(--spacing-xs)] first:pb-[var(--spacing-xs)] not-first:border-[var(--grey-500)]/15">
            <div className="flex items-center gap-[var(--spacing-sm)]">
                <Image
                    src={avatar}
                    alt={name}
                    width={32}
                    height={32}
                    className="hidden md:block rounded-full object-cover"
                />
                <span className="text-[var(--grey-900)] text-[length:var(--font-size-xs)] font-bold">{name}</span>
            </div>
            <div className="flex flex-col items-end gap-[4px]">
                <span className="text-[var(--grey-900)] text-[length:var(--font-size-xs)] font-bold">
                    {formatCurrency(amount)}
                </span>
                <span className="text-[var(--grey-500)] text-[length:var(--font-size-xs)]">{formatDate(date)}</span>
            </div>
        </div>
    );
}
