import { getRecurringBills } from "@/_lib/data-services";
import { RecurringBillsProps } from "@/_lib/types";
import { getDueSoonBills, getPaidBills, getUpcomingBills } from "@/_lib/helpers";
import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import RecurringBillOverviewItem from "./RecurringBillOverviewItem";

export default async function RecurringBills() {
    const recurringBills: RecurringBillsProps[] = await getRecurringBills();

    return (
        <PrimaryCard
            title="Recurring Bills"
            more
            moreText="See Details"
            linkTo="recurring-bills"
            altText="See Recurring Bills Details">
            <div className="flex flex-col gap-[var(--spacing-xs)] pt-[12px]">
                <RecurringBillOverviewItem
                    theme="var(--green)"
                    total={getPaidBills(recurringBills).paidBills}
                    label="Paid Bills"
                />
                <RecurringBillOverviewItem
                    theme="var(--yellow)"
                    total={getUpcomingBills(recurringBills).upcomingBills}
                    label="Total Upcoming"
                />
                <RecurringBillOverviewItem
                    theme="var(--cyan)"
                    total={getDueSoonBills(recurringBills).dueSoon}
                    label="Due Soon"
                />
            </div>
        </PrimaryCard>
    );
}
