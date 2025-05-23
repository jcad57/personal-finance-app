import { OverviewDataType } from "@/_lib/types";
import { getOverviewData } from "@/_lib/data-services";

import PotsOverviewCard from "@/app/home/_components/PotsOverviewCard";
import SecondaryCard from "@/components/Layout/Cards/SecondaryCard";
import TransactionsOverview from "@/app/home/_components/Transactions/TransactionsOverview";
import BudgetOverviewCard from "@/app/home/_components/BudgetsOverviewCard";
import RecurringBills from "@/app/home/_components/RecurringBills/RecurringBillsOverview";
import Loading from "@/components/Layout/Loading";
import { Suspense } from "react";

export default async function Overview() {
    const overviewData: OverviewDataType = await getOverviewData();

    return (
        <main className="px-[var(--spacing-sm)] py-[var(--spacing-lg)] pb-[52px] lg:pb-[var(--spacing-lg)] lg:w-full md:p-[40px] overflow-y-auto">
            <h1 className="text-[length:var(--font-size-xl)] font-bold">Overview</h1>

            <section
                id="overview"
                className="flex flex-col md:flex-row gap-[var(--spacing-xs)] md:gap-[var(--spacing-lg)] my-[var(--spacing-xl)]">
                <SecondaryCard title="Current Balance" value={overviewData.currentBalance} accent grow />
                <SecondaryCard title="Income" value={overviewData.currentIncome} grow />
                <SecondaryCard title="Expenses" value={overviewData.currentExpenses} grow />
            </section>
            <div className="grid xl:grid-cols-2 gap-[var(--spacing-lg)]">
                <section
                    id="Pots & Transactions Overview"
                    className="grid gap-[var(--spacing-xs)] md:gap-[var(--spacing-lg)]">
                    <PotsOverviewCard />
                    <TransactionsOverview />
                </section>
                <section
                    id="Budgets & Bills Overview"
                    className="flex flex-col gap-[var(--spacing-sm)] md:gap-[var(--spacing-lg)]">
                    <Suspense fallback={<Loading />}>
                        <BudgetOverviewCard />
                    </Suspense>
                    <RecurringBills />
                </section>
            </div>
        </main>
    );
}
