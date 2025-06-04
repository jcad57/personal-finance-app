export default function SpendingProgressBar({
    spent,
    maximum,
    theme,
}: {
    spent: number;
    maximum: number;
    theme: string;
}) {
    const totalSpent = (spent / maximum) * 100;
    return (
        <div className="flex flex-col w-full h-[32px] p-[4px] bg-[var(--beige-100)] rounded-[4px]">
            <div
                className={`h-full rounded-[4px]`}
                style={{ width: `${totalSpent > 100 ? 100 : totalSpent}%`, backgroundColor: `${theme}` }}></div>
        </div>
    );
}
