import OverviewCardDetailed from "../../Layout/OverviewCardDetailed";
import RecurringBillOverviewItem from "./RecurringBillOverviewItem";

export default function RecurringBills() {
    return (
        <OverviewCardDetailed title="Recurring Bills" seeDetails>
            <div className="flex flex-col gap-[var(--spacing-xs)] pt-[12px]">
                <RecurringBillOverviewItem />
                <RecurringBillOverviewItem />
                <RecurringBillOverviewItem />
            </div>
        </OverviewCardDetailed>
    );
}
