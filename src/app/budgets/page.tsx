import { getBudgets } from "@/_lib/data-services";
import Budgets from "./_components/Budgets";

export default async function Page() {
    const budgetData = await getBudgets();

    return (
        <>
            <Budgets budgetData={budgetData} />
        </>
    );
}
