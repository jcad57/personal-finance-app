"use client";

import { ModalProvider } from "@/context/ModalContext";
import { ReactNode } from "react";

import UserAuthProvider from "@/context/UserAuthContext";
import Modal from "@/components/Layout/Modals/Modal";

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
            <UserAuthProvider>
                <ModalProvider>
                    <Modal />
                    {children}
                </ModalProvider>
            </UserAuthProvider>
    );
};
