import { getWindowSize } from "./getWindowSize";
import { useEffect } from "react";
import { useModal } from "@/context/ModalContext";

import EmptyCard from "../EmptyCard";
import AddEditBudget from "./AddEditBudget";
import AddEditPot from "./AddEditPot";
import EditSavings from "./EditSavings";
import DeleteItem from "./DeleteItem";

const Modal = () => {
    const { modalType, isModalOpen, closeModal, modalProps } = useModal();
    const scrollY = getWindowSize();

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            const modal = document.getElementById("modal");
            if (e.target !== modal && !modal?.contains(e.target as Node)) {
                closeModal();
            }
        }
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
            document.body.addEventListener("click", handleClickOutside);
        } else {
            document.body.style.overflow = "";
            document.body.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "";
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, [isModalOpen, closeModal]);

    if (!isModalOpen) return null;

    const renderContent = () => {
        switch (modalType) {
            case "add-budget":
                return <AddEditBudget {...modalProps} modalType="add" />;
            case "edit-budget":
                return <AddEditBudget {...modalProps} modalType="edit" />;
            case "delete-budget":
                return <DeleteItem {...modalProps} />;
            case "add-pot":
                return <AddEditPot {...modalProps} modalType="add" />;
            case "edit-pot":
                return <AddEditPot {...modalProps} modalType="edit" />;
            case "delete-pot":
                return <DeleteItem {...modalProps} />;
            case "edit-savings":
                return <EditSavings {...modalProps} />;
            default:
                return null;
        }
    };

    return (
        <div
            className={`absolute left-0 w-full grid items-center justify-center px-[var(--spacing-md)] h-full z-1000 bg-black/55 transition-all duration-500 ease-in-out`}
            style={{ top: `${scrollY}px` }}>
            <div id="modal" role="dialog" aria-modal="true" className="w-screen max-w-[560px] px-[var(--spacing-md)]">
                <EmptyCard>{renderContent()}</EmptyCard>
            </div>
        </div>
    );
};

export default Modal;
