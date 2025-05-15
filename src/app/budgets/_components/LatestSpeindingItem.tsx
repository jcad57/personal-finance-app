export default function LatestSpendingItem() {
    return (
        <div className="flex justify-between not-first:border-t-[1px] last:pt-[var(--spacing-xs)] [&:not(:first-child):not(:last-child)]:py-[var(--spacing-xs)] first:pb-[var(--spacing-xs)] not-first:border-[var(--grey-500)]/15">
            <div className="flex items-center gap-[var(--spacing-sm)]">
                <div className="hidden md:block rounded-full w-[32px] h-[32px] bg-[var(--grey-500)]"></div>
                <span className="text-[var(--grey-900)] text-[length:var(--font-size-xs)] font-bold">Item Name</span>
            </div>
            <div className="flex flex-col items-end gap-[4px]">
                <span className="text-[var(--grey-900)] text-[length:var(--font-size-xs)] font-bold">$10.00</span>
                <span className="text-[var(--grey-500)] text-[length:var(--font-size-xs)]">16 Aug 2024</span>
            </div>
        </div>
    );
}
