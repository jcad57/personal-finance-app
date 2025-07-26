import { OverviewDataType } from "@/_lib/types";
import { getOverviewData } from "@/_lib/data-services";
import { Suspense } from "react";

import TransactionsOverview from "@/app/home/_components/Transactions/TransactionsOverview";
import BudgetOverviewCard from "@/app/home/_components/BudgetsOverviewCard";
import PotsOverviewCard from "@/app/home/_components/PotsOverviewCard";
import RecurringBills from "@/app/home/_components/RecurringBills/RecurringBillsOverview";
import SecondaryCard from "@/components/Layout/Cards/SecondaryCard";
import Loading from "@/components/Layout/Loading";
import Button from "@/components/Layout/Button";

export default async function Overview() {
    const overviewData: OverviewDataType = await getOverviewData();

    return (
        <main className="overflow-y-auto px-[var(--spacing-sm)] py-[var(--spacing-lg)] pb-[89px] md:px-[40px] md:pt-[32px] md:pb-[123px] lg:py-[32px] md:h-full lg:w-full ">
            <div className="flex justify-between">
            <h1 className="text-[length:var(--font-size-xl)] font-bold">Overview</h1>
            <Button isLogout />
            </div>
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
