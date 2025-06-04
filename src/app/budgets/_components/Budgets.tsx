import { getAllTransactions, getBudgets } from "@/_lib/data-services";
import { BudgetOverviewItemProps, TransactionItemProps } from "@/_lib/types";

import BudgetWheel from "@/components/Layout/BudgetWheel";
import EmptyCard from "@/components/Layout/EmptyCard";
import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import SpendingSummaryItem from "./SpendingSummaryItem";
import BudgetCategories from "./BudgetCategories";
import BudgetPageHeader from "./BudgetPageHeader";
import { filterBudgetTotalSpending } from "@/_lib/helpers";

export default async function Budgets() {
    const budgetData: BudgetOverviewItemProps[] = await getBudgets();
    const transactionData: TransactionItemProps[] = await getAllTransactions();

    const totalSpending = filterBudgetTotalSpending(transactionData);

    return (
        <FullPageWrapper>
            <BudgetPageHeader />
            <div className="lg:flex gap-[var(--spacing-xl)]">
                <section id="budget-wheel" className="flex flex-col pb-[var(--spacing-lg)] w-full lg:max-w-[650px]">
                    <EmptyCard>
                        <div className="block md:grid md:grid-cols-2 md:items-center lg:block">
                            <div className="mx-auto w-full lg:pb-[var(--spacing-xl)]">
                                <BudgetWheel totalSpending={totalSpending} />
                            </div>
                            <div className=" md:py-[var(--spacing-md)] lg:py-0 ">
                                <h2 className="font-bold text-[var(--grey-900)] text-[length:var(--font-size-lg)] pb-[var(--spacing-lg)] pt-[var(--spacing-lg)] md:pt-0">
                                    Spending Summary
                                </h2>
                                <div className="flex flex-col">
                                    {budgetData?.map((budget) => {
                                        return (
                                            <SpendingSummaryItem
                                                transactionData={transactionData}
                                                category={budget.category}
                                                maximum={budget.maximum}
                                                theme={budget.theme}
                                                key={budget.category}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </EmptyCard>
                </section>
                <BudgetCategories budgetData={budgetData} transactionData={transactionData} />
            </div>
        </FullPageWrapper>
    );
}
