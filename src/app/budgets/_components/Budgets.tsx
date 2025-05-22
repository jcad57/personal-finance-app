import { BudgetOverviewItemProps } from "@/_lib/types";

import BudgetWheel from "@/components/Layout/BudgetWheel";
import EmptyCard from "@/components/Layout/EmptyCard";
import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import PageHeader from "@/components/Layout/PageHeader";
import SpendingSummaryItem from "./SpendingSummaryItem";
import BudgetCategoryItemWrapper from "./BudgetCategoryItemWrapper";
import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";

export default function Budgets({ budgetData }: { budgetData: BudgetOverviewItemProps[] }) {
    // console.log(budgetData);
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
                <section id="budgets" className="flex flex-col gap-[var(--spacing-lg)] w-full">
                    {budgetData?.map((item) => {
                        return (
                            <PrimaryCard
                                key={item.category}
                                title={item.category}
                                accentDot
                                accentDotTheme={item.theme}
                                ellipsis>
                                <BudgetCategoryItemWrapper
                                    category={item.category}
                                    maximum={item.maximum}
                                    theme={item.theme}
                                    key={item.theme}
                                    spent={36}
                                />
                            </PrimaryCard>
                        );
                    })}
                </section>
            </div>
        </FullPageWrapper>
    );
}
