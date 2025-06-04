import { useModal } from "@/context/ModalContext";
import {
    Field,
    Fieldset,
    Input,
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

import closeModalIcon from "../../../../public/assets/images/icon-close-modal.svg";
import caretDown from "../../../../public/assets/images/icon-caret-down.svg";

import Button from "../Button";
import Image from "next/image";

const potThemes = [
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "cyan", label: "Cyan" },
    { value: "navy", label: "Navy" },
    { value: "red", label: "Red" },
    { value: "purple", label: "Purple" },
    { value: "light-purple", label: "Light Purple" },
    { value: "turquoise", label: "Turquoise" },
    { value: "brown", label: "Brown" },
    { value: "magenta", label: "Magenta" },
    { value: "blue", label: "Blue" },
    { value: "navy-green", label: "Navy Green" },
    { value: "army-green", label: "Army Green" },
    { value: "gold", label: "Gold" },
    { value: "orange", label: "Orange" },
];

const AddEditPot = ({ ...modalProps }) => {
    const [selectedTheme, setSelectedTheme] = useState(potThemes[0]);
    const [potName, setPotName] = useState(modalProps.pot || "");
    const { closeModal } = useModal();
    return (
        <div className="relative grid gap-[20px]">
            <div className="flex items-center justify-between">
                <h2 className="md:text-[length:var(--font-size-xl)] text-[length:var(--font-size-lg)] font-bold text-[var(--grey-900)]">
                    {modalProps.modalType === "add" ? `Add New` : `Edit`} Pot
                </h2>
                <Image src={closeModalIcon} alt="Close Modal" className="cursor-pointer" onClick={closeModal} />
            </div>
            <p className="text-[length:var(--font-size-sm)] text-[var(--grey-500)]">
                {modalProps.modalType === "add"
                    ? `Create a pot to set savings targets. These can help keep you on track as you save for special purchases.`
                    : `If your saving targets change, feel free to update your pots.`}
            </p>
            <ModalForm
                selectedTheme={selectedTheme}
                setSelectedTheme={setSelectedTheme}
                potName={potName}
                setPotName={setPotName}
            />
            <Button primary buttonText={modalProps.modalType === "add" ? `Add Pot` : "Save Changes"} />
        </div>
    );
};

export default AddEditPot;
type ModalFormProps = {
    potName: string;
    setPotName: (name: string) => void;
    selectedTheme: { value: string; label: string };
    setSelectedTheme: (theme: { value: string; label: string }) => void;
};
const ModalForm = ({ selectedTheme, setSelectedTheme, potName, setPotName }: ModalFormProps) => {
    const charsLeft = 30 - potName.length;
    return (
        <Fieldset className="w-full grid gap-[var(--spacing-s)]">
            <Field className="relative flex flex-col gap-[4px]">
                <Label className="font-bold text-[length:var(--font-size-xs)] text-[var(--grey-500)]">Pot Name</Label>
                <Input
                    name="budget-category"
                    onChange={(e) => setPotName(e.target.value)}
                    value={potName}
                    className="appearance-none px-[var(--spacing-md)] py-[var(--spacing-xs)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] focus:border-[var(--grey-900)] focus:outline-none"
                    placeholder="e.g. Rainy Days"
                    maxLength={30}
                />
                <span
                    className={`${
                        charsLeft > 5 ? `text-[var(--grey-500)]` : `text-[var(--red)]`
                    } text-right text-[length:var(--font-size-xs)] transition-all duration-150 ease-in-out`}>
                    {`${charsLeft}`} characters left
                </span>
            </Field>
            <Field className="relative flex flex-col gap-[4px]">
                <div className="absolute bottom-[13px] left-[20px]">
                    <span className="text-[var(--grey-500)]">$</span>
                </div>
                <Label className="font-bold text-[length:var(--font-size-xs)] text-[var(--grey-500)]">Target</Label>
                <Input
                    name="budget-category"
                    className="appearance-none ps-[42px] pe-[var(--spacing-md)] py-[var(--spacing-xs)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] focus:border-[var(--grey-900)] focus:outline-none"
                    placeholder="e.g. 2000"
                />
            </Field>
            <Field className="relative flex flex-col gap-[4px]">
                <Image
                    src={caretDown}
                    width={16}
                    height={16}
                    alt=""
                    className="absolute right-[8px] bottom-[16px] translate-[-50%]"
                />
                <Label className="font-bold text-[length:var(--font-size-xs)] text-[var(--grey-500)]">Theme</Label>
                <Listbox value={selectedTheme} onChange={setSelectedTheme}>
                    <ListboxButton className="flex items-center gap-[var(--spacing-xs)] appearance-none pe-[var(--spacing-xxl)] ps-[var(--spacing-md)] py-[var(--spacing-xs)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] focus:border-[var(--grey-900)] focus:outline-none">
                        <div
                            className="w-[16px] h-[16px] rounded-full"
                            style={{ backgroundColor: `var(--${selectedTheme.value})` }}></div>
                        {selectedTheme.label}
                    </ListboxButton>
                    <ListboxOptions
                        transition
                        className="absolute top-[78px] z-10 w-full max-h-[200px] overflow-y-auto no-scrollbar px-[var(--spacing-md)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] mt-[var(--spacing-xxxs)] opacity-100 transition duration-100 ease-in data-leave:data-closed:opacity-0 focus:border-[var(--grey-900)] focus:outline-none">
                        {potThemes.map((theme) => (
                            <ListboxOption
                                key={theme.value}
                                value={theme}
                                className="flex items-center gap-[var(--spacing-xs)] data-selected:font-bold border-[var(--grey-100)] not-first:border-y-[1px] py-[var(--spacing-xs)] cursor-pointer">
                                <div
                                    className="w-[16px] h-[16px] rounded-full"
                                    style={{ backgroundColor: `var(--${theme.value})` }}></div>
                                {theme.label}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>
            </Field>
        </Fieldset>
    );
};
