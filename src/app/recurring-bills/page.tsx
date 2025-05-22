import { getRecurringBills } from "@/_lib/data-services";
import RecurringBills from "./_components/RecurringBills";

export default async function Page() {
    const recurringBills = await getRecurringBills();

    return (
        <>
            <RecurringBills recurringBills={recurringBills} />
        </>
    );
}
