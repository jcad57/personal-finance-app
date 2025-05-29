import { getBudgets } from "@/_lib/data-services";
import { BudgetOverviewItemProps } from "@/_lib/types";

import BudgetWheel from "@/components/Layout/BudgetWheel";
import EmptyCard from "@/components/Layout/EmptyCard";
import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import PageHeader from "@/components/Layout/PageHeader";
import SpendingSummaryItem from "./SpendingSummaryItem";
import BudgetCategories from "./BudgetCategories";

export default async function Budgets() {
    const budgetData: BudgetOverviewItemProps[] = await getBudgets();
    return (
        <FullPageWrapper>
            <PageHeader title="Budgets" showButton buttonText="+ Add New Budget" headerButton />
            <div className="lg:flex gap-[var(--spacing-xl)]">
                <section id="budget-wheel" className="flex flex-col pb-[var(--spacing-lg)] w-full lg:max-w-[650px]">
                    <EmptyCard>
                        <div className="block md:grid md:grid-cols-2 md:items-center lg:block">
                            <div className="mx-auto w-full lg:pb-[var(--spacing-xl)]">
                                <BudgetWheel />
                            </div>
                            <div className=" md:py-[var(--spacing-md)] lg:py-0 ">
                                <h2 className="font-bold text-[var(--grey-900)] text-[length:var(--font-size-lg)] pb-[var(--spacing-lg)] ">
                                    Spending Summary
                                </h2>
                                <div className="flex flex-col">
                                    {budgetData?.map((budget) => {
                                        return (
                                            <SpendingSummaryItem
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
                <BudgetCategories budgetData={budgetData} />
            </div>
        </FullPageWrapper>
    );
}
