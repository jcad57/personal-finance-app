import { Field, Input, Label } from "@headlessui/react";
import { formatCurrency } from "@/_lib/helpers";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";

import closeModalIcon from "../../../../public/assets/images/icon-close-modal.svg";
import Button from "../Button";
import Image from "next/image";

const EditSavings = ({ ...modalProps }) => {
    const { closeModal } = useModal();
    const [totalSavedAmount, setTotalSavedAmount] = useState(modalProps.totalSaved);
    const [amountToAdd, setAmountToAdd] = useState(0);
    const [amountToWithdraw, setAmountToWithdraw] = useState(0);
    const currentSaved = modalProps.totalSaved || 0;
    const target = modalProps.target || null;

    function handleChange(value: number) {
        if (modalProps.modalType === "add") setAmountToAdd(value);
        setTotalSavedAmount((prev: number) => {
            return prev + Number(value);
        });
        if (modalProps.modalType === "withdraw") setAmountToWithdraw(value);
        setTotalSavedAmount((prev: number) => {
            return prev - Number(value);
        });
    }

    return (
        <div className="relative grid gap-[20px]">
            <div className="flex items-center justify-between">
                <h2 className="md:text-[length:var(--font-size-xl)] text-[length:var(--font-size-lg)] font-bold text-[var(--grey-900)]">
                    {modalProps.modalType === "withdraw" ? `Withdraw from ` : `Add to `} &quot;{modalProps.potName}
                    &quot;
                </h2>
                <Image src={closeModalIcon} alt="Close Modal" className="cursor-pointer" onClick={closeModal} />
            </div>
            <p className="text-[length:var(--font-size-sm)] text-[var(--grey-500)]">
                {modalProps.modalType === "withdraw"
                    ? `Withdraw from your pot to put money back in your main balance. This will reduce the amount you have in this pot.`
                    : `Add money to your pot to keep it separate from your main balance. As soon as you add this money, it will be deducted from your current balance.`}
            </p>
            <div className="py-[10px]">
                <div className="flex justify-between items-center pb-[var(--spacing-sm)]">
                    <span className="text-[var(--grey-500)] text-[length:var(--font-size-sm)]">Total Saved</span>
                    <span className="text-[length:var(--font-size-xl)] font-bold">
                        {formatCurrency(modalProps.totalSaved + Number(amountToAdd))}
                    </span>
                </div>
                <ProgressBar
                    currentSaved={currentSaved}
                    target={target}
                    amountToAdd={Number(amountToAdd)}
                    amountToWithdraw={Number(amountToWithdraw)}
                    modalType={modalProps.modalType as "add" | "withdraw"}
                />
                <div className="flex justify-between items-center pt-[var(--spacing-sm)]">
                    <span
                        className="text-[length:var(--font-size-xs)] font-bold"
                        style={{ color: modalProps.modalType === "add" ? "var(--green)" : "var(--red)" }}>
                        {((totalSavedAmount / target) * 100).toFixed(2)}%
                    </span>
                    <span className={`text-[var(--grey-500)] text-[length:var(--font-size-xs)]`}>
                        Target of {formatCurrency(target).split(".")[0]}
                    </span>
                </div>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    closeModal();
                }}>
                <Field className="relative  mb-[var(--spacing-md)]">
                    <div className="absolute bottom-[13px] left-[20px]">
                        <span className="text-[var(--grey-500)]">$</span>
                    </div>
                    <Label className="font-bold text-[length:var(--font-size-xs)] text-[var(--grey-500)]">
                        Amount to {modalProps.modalType === "add" ? "Add" : "Withdraw"}
                    </Label>
                    <Input
                        name="add-"
                        className="appearance-none w-full ps-[42px] pe-[var(--spacing-md)] py-[var(--spacing-xs)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] focus:border-[var(--grey-900)] focus:outline-none"
                        value={amountToAdd || amountToWithdraw || ""}
                        onChange={(e) => handleChange(Number(e.target.value))}
                        autoComplete="off"
                        placeholder="e.g. 100"
                        type="number"
                        required
                    />
                </Field>
                <Button
                    primary
                    buttonText={modalProps.modalType === "withdraw" ? `Confirm Withdraw` : "Confirm Addition"}
                />
            </form>
            <p className="text-center font-bold text-[length:var(--font-size-sm)] text-[var(--red)]">
                DEMO MODE: Changes will not be saved
            </p>
        </div>
    );
};

export default EditSavings;

const ProgressBar = ({
    modalType,
    currentSaved,
    target,
    amountToAdd,
    amountToWithdraw,
}: {
    modalType: "add" | "withdraw";
    currentSaved: number;
    target: number;
    amountToAdd: number;
    amountToWithdraw: number;
}) => {
    const colorBarWidth =
        modalType === "add" ? (currentSaved / target) * 100 : ((currentSaved - amountToWithdraw) / target) * 100;

    // const maxColorBarWidth = ((target - currentSaved) / target) * 100;

    return (
        <div className="flex w-full gap-[2px] h-[8px] bg-[var(--beige-100)] rounded-[4px]">
            <div
                className={`h-full rounded-tl-full rounded-bl-full`}
                style={{
                    width: colorBarWidth <= 0 ? "0%" : `${colorBarWidth}%`,
                    backgroundColor: `black`,
                }}></div>
            <div
                className={`h-full rounded-tr-full rounded-br-full`}
                style={{
                    width: `${
                        modalType === "add" ? (amountToAdd / target) * 100 : (amountToWithdraw / target) * 100 || 0
                    }%`,
                    backgroundColor: `${modalType === "add" ? "var(--green)" : "var(--red)"}`,
                }}></div>
        </div>
    );
};
