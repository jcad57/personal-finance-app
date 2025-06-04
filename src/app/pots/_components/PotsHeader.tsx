"use client";
import { useModal } from "@/context/ModalContext";

import PageHeader from "@/components/Layout/PageHeader";

const PotsHeader = () => {
    const { openModal } = useModal();
    return (
        <PageHeader
            title="Pots"
            showButton
            buttonText="+ Add New Pot"
            headerButton
            onClick={() => openModal("add-pot", {})}
        />
    );
};

export default PotsHeader;
