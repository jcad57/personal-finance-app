"use client";
import { BudgetCategoryProps, TransactionItemProps } from "@/_lib/types";
import { useModal } from "@/context/ModalContext";

import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import BudgetCategoryItemWrapper from "./BudgetCategoryItemWrapper";

const BudgetCategories = ({
    budgetData,
    transactionData,
}: {
    budgetData: BudgetCategoryProps[];
    transactionData: TransactionItemProps[];
}) => {
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
                        onEditClick={(e) => {
                            e.stopPropagation();
                            openModal("edit-budget", { budgetCategory: item.category });
                        }}
                        onDeleteClick={(e) => {
                            e.stopPropagation();
                            openModal("delete-budget", { name: item.category, type: "budget" });
                        }}>
                        <BudgetCategoryItemWrapper
                            transactionData={transactionData}
                            category={item.category}
                            maximum={item.maximum}
                            theme={item.theme}
                            key={item.theme}
                        />
                    </PrimaryCard>
                );
            })}
        </section>
    );
};

export default BudgetCategories;
