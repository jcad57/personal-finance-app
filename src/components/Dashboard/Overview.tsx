import PotsOverviewCard from "@/components/Dashboard/Pots/PotsOverviewCard";
import OverviewCardBasic from "@/components/Layout/OverviewCardBasic";
import TransactionsOverview from "@/components/Dashboard/Transactions/TransactionsOverview";
import BudgetOverviewCard from "@/components/Dashboard/Budget/BudgetsOverviewCard";
import RecurringBills from "@/components/Dashboard/RecurringBills/RecurringBillsOverview";

import { getOverviewData } from "@/_lib/data-services";

export default async function Overview() {
    const { currentBalance, currentIncome, currentExpenses, potsTotalSaved } = await getOverviewData();

    return (
        <main className="px-[var(--spacing-sm)] py-[var(--spacing-lg)] pb-[52px] lg:w-full lg:pb-0 md:p-[40px] overflow-y-auto">
            <h1 className="text-[length:var(--font-size-xl)] font-bold">Overview</h1>
            <section id="overview" className="flex flex-col md:flex-row gap-[var(--spacing-xs)] my-[var(--spacing-xl)]">
                <OverviewCardBasic title="Current Balance" value={currentBalance} primary />
                <OverviewCardBasic title="Income" value={currentIncome} />
                <OverviewCardBasic title="Expenses" value={currentExpenses} />
            </section>
            <div className="grid xl:grid-cols-2 gap-[var(--spacing-lg)]">
                <section id="pots-transactions" className="grid gap-[var(--spacing-xs)] md:gap-[var(--spacing-lg)]">
                    <PotsOverviewCard totalSaved={potsTotalSaved} />
                    <TransactionsOverview />
                </section>
                <section id="budget-bills" className="flex flex-col gap-[var(--spacing-sm)] md:gap-[var(--spacing-lg)]">
                    <BudgetOverviewCard />
                    <RecurringBills />
                </section>
            </div>
        </main>
    );
}
