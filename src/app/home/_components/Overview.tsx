import { OverviewDataType } from "@/_lib/types";

import PotsOverviewCard from "@/app/home/_components/PotsOverviewCard";
import SecondaryCard from "@/components/Layout/Cards/SecondaryCard";
import TransactionsOverview from "@/app/home/_components/Transactions/TransactionsOverview";
import BudgetOverviewCard from "@/app/home/_components/BudgetsOverviewCard";
import RecurringBills from "@/app/home/_components/RecurringBills/RecurringBillsOverview";

export default function Overview({ overviewData }: { overviewData: OverviewDataType }) {
    return (
        <main className="px-[var(--spacing-sm)] py-[var(--spacing-lg)] pb-[52px] lg:pb-[var(--spacing-lg)] lg:w-full md:p-[40px] overflow-y-auto">
            <h1 className="text-[length:var(--font-size-xl)] font-bold">Overview</h1>
            <section id="overview" className="flex flex-col md:flex-row gap-[var(--spacing-xs)] my-[var(--spacing-xl)]">
                <SecondaryCard title="Current Balance" value={overviewData.currentBalance} accent />
                <SecondaryCard title="Income" value={overviewData.currentIncome} />
                <SecondaryCard title="Expenses" value={overviewData.currentExpenses} />
            </section>
            <div className="grid xl:grid-cols-2 gap-[var(--spacing-lg)]">
                <section id="pots-transactions" className="grid gap-[var(--spacing-xs)] md:gap-[var(--spacing-lg)]">
                    <PotsOverviewCard totalSaved={overviewData.potsTotalSaved} />
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
