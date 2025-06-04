"use client";

import Modal from "@/components/Layout/Modals/Modal";
import { ModalProvider } from "@/context/ModalContext";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ModalProvider>
            <Modal />
            {children}
        </ModalProvider>
    );
};
