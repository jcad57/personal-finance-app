"use client";
import { useModal } from "@/context/ModalContext";

import PageHeader from "@/components/Layout/PageHeader";

const BudgetPageHeader = () => {
    const { openModal } = useModal();

    return (
        <>
            <PageHeader
                title="Budgets"
                showButton
                buttonText="+ Add New Budget"
                headerButton
                onClick={() => openModal("add-budget", {})}
            />
        </>
    );
};

export default BudgetPageHeader;
