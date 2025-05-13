import OverviewCardDetailed from "../OverviewCardDetailed";
import RecurringBillOverviewItem from "./RecurringBillOverviewItem";

export default function RecurringBills() {
    return (
        <OverviewCardDetailed title="Recurring Bills" seeDetails>
            <div className="flex flex-col gap-[var(--spacing-xs)] pt-[12px]">
                <RecurringBillOverviewItem theme="#7f9161" />
                <RecurringBillOverviewItem theme="#3f82b2" />
                <RecurringBillOverviewItem theme="#934f6f" />
            </div>
        </OverviewCardDetailed>
    );
}
