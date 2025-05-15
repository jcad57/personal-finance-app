import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import RecurringBillOverviewItem from "./RecurringBillOverviewItem";

export default function RecurringBills() {
    return (
        <PrimaryCard
            header="Recurring Bills"
            more
            moreText="See Details"
            linkTo="recurring-bills"
            altText="See Recurring Bills Details">
            <div className="flex flex-col gap-[var(--spacing-xs)] pt-[12px]">
                <RecurringBillOverviewItem theme="#7f9161" />
                <RecurringBillOverviewItem theme="#3f82b2" />
                <RecurringBillOverviewItem theme="#934f6f" />
            </div>
        </PrimaryCard>
    );
}
