import SummaryItem from "./SummaryItem";

const SUMMARY_DATA = [
    {
        id: 1,
        label: "Paid Bills",
        value: "2 ($320.00)",
    },
    {
        id: 2,
        label: "Total Upcoming",
        value: "2 ($320.00)",
    },
    {
        id: 3,
        label: "Due Soon",
        value: "2 ($320.00)",
    },
];

export default function Summary() {
    return (
        <div>
            {SUMMARY_DATA.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="flex justify-between not-first:border-t-[1px] last:pt-[var(--spacing-xs)] [&:not(:first-child):not(:last-child)]:py-[var(--spacing-xs)] first:pb-[var(--spacing-xs)] not-first:border-[var(--grey-500)]/15">
                        <SummaryItem
                            label={item.label}
                            value={item.value}
                            key={item.id}
                            textColor={item.label === "Due Soon" ? "--red" : "--grey-500"}
                        />
                    </div>
                );
            })}
        </div>
    );
}
