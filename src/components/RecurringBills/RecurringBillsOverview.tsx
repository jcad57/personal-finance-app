import OverviewCard from "../Layout/OverviewCard";
import RecurringBillOverviewItem from "./RecurringBillOverviewItem";
import data from "../../../public/data.json";
import { formatDate } from "@/lib/helpers";
const recurringBills = data.transactions.filter((transaction) => transaction.recurring === true).slice(0, 3);

export default function RecurringBills() {
    return (
        <OverviewCard title="Recurring Bills" seeDetails>
            <div className="flex flex-col gap-[var(--spacing-xs)] pt-[12px]">
                <RecurringBillOverviewItem />
                <RecurringBillOverviewItem />
                <RecurringBillOverviewItem />
            </div>
        </OverviewCard>
    );
}
