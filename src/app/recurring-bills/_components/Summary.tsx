import { formatCurrency } from "@/_lib/helpers";
import SummaryItem from "./SummaryItem";

type SummaryData = {
    paidBills: { paidBills: number; numberOfPaidBills: number };
    totalUpcomingBills: { upcomingBills: number; numberOfUpcomingBills: number };
    dueSoonBills: { dueSoon: number; numberOfDueSoonBills: number };
};

export default function Summary({ paidBills, totalUpcomingBills, dueSoonBills }: SummaryData) {
    const SUMMARY_DATA = [
        {
            id: 1,
            label: "Paid Bills",
            value: paidBills.paidBills,
            total: paidBills.numberOfPaidBills,
        },
        {
            id: 2,
            label: "Total Upcoming",
            value: totalUpcomingBills.upcomingBills,
            total: totalUpcomingBills.numberOfUpcomingBills,
        },
        {
            id: 3,
            label: "Due Soon",
            value: dueSoonBills.dueSoon,
            total: dueSoonBills.numberOfDueSoonBills,
        },
    ];

    return (
        <ul>
            {SUMMARY_DATA.map((item) => {
                return (
                    <li
                        key={item.id}
                        className="flex justify-between not-first:border-t-[1px] last:pt-[var(--spacing-xs)] [&:not(:first-child):not(:last-child)]:py-[var(--spacing-xs)] first:pb-[var(--spacing-xs)] not-first:border-[var(--grey-500)]/15">
                        <SummaryItem
                            label={item.label}
                            value={` ${item.total} (${formatCurrency(item.value)})`}
                            textColor={item.label === "Due Soon" ? "--red" : "--grey-900"}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
