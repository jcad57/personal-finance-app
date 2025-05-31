"use client";
// import AddNewItemModal from "@/components/Layout/Modals/AddNewItemModal";
import PageHeader from "@/components/Layout/PageHeader";
// import { useState } from "react";

const BudgetPageHeader = () => {
    // const [showAddNewBudgetModal, setShowAddNewBudgetModal] = useState(false);

    return (
        <>
            <PageHeader
                title="Budgets"
                showButton
                buttonText="+ Add New Budget"
                headerButton
                // onClick={() => setShowAddNewBudgetModal((prev) => !prev)}
            />

            {/* {showAddNewBudgetModal && (
                <AddNewItemModal
                    title="Add New Budget"
                    description="Choose a category to set a spending budget. These categories can help you monitor spending."
                />
            )} */}
        </>
    );
};

export default BudgetPageHeader;
