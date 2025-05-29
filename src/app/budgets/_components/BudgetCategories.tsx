"use client";
import { BudgetCategoryProps } from "@/_lib/types";

import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import BudgetCategoryItemWrapper from "./BudgetCategoryItemWrapper";

const BudgetCategories = ({ budgetData }: BudgetCategoryProps) => {
    function handleEditClick(category: string) {
        console.log(`Edit ${category}`);
    }

    function handleDeleteClick(category: string) {
        console.log(`Delete ${category}`);
    }
    return (
        <section id="budgets" className="flex flex-col gap-[var(--spacing-lg)] w-full">
            {budgetData?.map((item) => {
                return (
                    <PrimaryCard
                        key={item.category}
                        title={item.category}
                        accentDot
                        accentDotTheme={item.theme}
                        ellipsis
                        editLabel="Edit Budget"
                        deleteLabel="Delete Budget"
                        onEditClick={() => handleEditClick(item.category)}
                        onDeleteClick={() => handleDeleteClick(item.category)}>
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
    );
};

export default BudgetCategories;
