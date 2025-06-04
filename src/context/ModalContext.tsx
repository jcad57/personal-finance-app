import { createContext, ReactNode, useContext, useState } from "react";

type ModalType =
    | "add-budget"
    | "edit-budget"
    | "delete-budget"
    | "add-pot"
    | "edit-pot"
    | "delete-pot"
    | "edit-savings";

type ModalProps = {
    [key: string]: unknown;
};

type ModalContextType = {
    modalType: ModalType | null;
    modalProps: ModalProps;
    openModal: (type: ModalType, props: ModalProps) => void;
    closeModal: () => void;
    isModalOpen: boolean;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalType, setModalType] = useState<ModalType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalProps, setModalProps] = useState<ModalProps>({});

    function openModal(type: ModalType, props: ModalProps) {
        setModalProps(props);
        setModalType(type);
        setIsModalOpen(true);
    }
    function closeModal() {
        setIsModalOpen(false);
        setModalType(null);
    }

    return (
        <ModalContext.Provider value={{ openModal, closeModal, modalType, isModalOpen, modalProps }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
