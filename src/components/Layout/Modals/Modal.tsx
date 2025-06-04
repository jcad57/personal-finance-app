// import { Field, Fieldset, Input, Label, Select } from "@headlessui/react";
import { useModal } from "@/context/ModalContext";

import EmptyCard from "../EmptyCard";
import AddEditBudget from "./AddEditBudget";
import AddEditPot from "./AddEditPot";
import DeleteBudget from "./DeleteBudget";
import DeletePot from "./DeletePot";
import EditSavings from "./EditSavings";

const Modal = () => {
    const { modalType, isModalOpen, modalProps } = useModal();

    if (!isModalOpen) return null;

    const renderContent = () => {
        switch (modalType) {
            case "add-budget":
                return <AddEditBudget {...modalProps} modalType="add" />;
            case "edit-budget":
                return <AddEditBudget {...modalProps} modalType="edit" />;
            case "delete-budget":
                return <DeleteBudget {...modalProps} />;
            case "add-pot":
                return <AddEditPot {...modalProps} modalType="add" />;
            case "edit-pot":
                return <AddEditPot {...modalProps} modalType="edit" />;
            case "delete-pot":
                return <DeletePot {...modalProps} />;
            case "edit-savings":
                return <EditSavings {...modalProps} />;

            default:
                return null;
        }
    };

    return (
        <div
            className={`absolute top-0 left-0 w-full h-full z-1000 bg-black/55 transition-all duration-500 ease-in-out`}>
            <div className="grid items-center justify-center mx-[var(--spacing-md)] h-full ">
                <div className="w-screen max-w-[560px] px-[var(--spacing-md)]">
                    <EmptyCard>{renderContent()}</EmptyCard>
                </div>
            </div>
        </div>
    );
};

export default Modal;
