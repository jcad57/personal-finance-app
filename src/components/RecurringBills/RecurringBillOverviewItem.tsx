export default function RecurringBillOverviewItem() {
    return (
        <div className="relative rounded-lg">
            {/* Background bar */}
            <div className="absolute flex w-[50px] h-[96%] top-[1px] left-[-4px] my-auto bg-[var(--green)] rounded-[11px] z-0" />

            {/* Foreground content */}
            <div className="relative z-10 flex justify-between bg-[var(--beige-100)] py-[var(--spacing-md)] px-[var(--spacing-sm)] rounded-lg">
                <p>Paid Bills</p>
                <p>$190</p>
            </div>
        </div>
    );
}
