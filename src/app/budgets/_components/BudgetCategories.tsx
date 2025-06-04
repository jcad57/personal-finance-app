"use client";
import { BudgetCategoryProps } from "@/_lib/types";
import { useModal } from "@/context/ModalContext";

import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import BudgetCategoryItemWrapper from "./BudgetCategoryItemWrapper";

const BudgetCategories = ({ budgetData, transactionData }: BudgetCategoryProps) => {
    const { openModal } = useModal();

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
                        onEditClick={() => openModal("edit-budget", { budgetCategory: item.category })}
                        onDeleteClick={() => openModal("delete-budget", { budgetCategory: item.category })}>
                        <BudgetCategoryItemWrapper
                            transactionData={transactionData}
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
