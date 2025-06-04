import { useModal } from "@/context/ModalContext";

import closeModalIcon from "../../../../public/assets/images/icon-close-modal.svg";

import Image from "next/image";
import Button from "../Button";

const DeletePot = ({ ...modalProps }) => {
    const { closeModal } = useModal();
    return (
        <div className="relative grid gap-[20px]">
            <div className="flex items-center justify-between">
                <h2 className="md:text-[length:var(--font-size-xl)] text-[length:var(--font-size-lg)] font-bold text-[var(--grey-900)]">
                    Delete {`"${modalProps.pot}"`}?
                </h2>
                <Image src={closeModalIcon} alt="Close Modal" className="cursor-pointer" onClick={closeModal} />
            </div>
            <p className="text-[length:var(--font-size-sm)] text-[var(--grey-500)]">
                Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it
                will be removed forever.
            </p>
            <Button isDelete buttonText="Yes, Confirm Deletion" />
            <button className="text-[length:var(--font-size-sm)] text-[var(--grey-500)] " onClick={closeModal}>
                No, Go Back
            </button>
        </div>
    );
};

export default DeletePot;
