import { useModal } from "@/context/ModalContext";
import { useState } from "react";
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

import closeModalIcon from "../../../../public/assets/images/icon-close-modal.svg";
import caretDown from "../../../../public/assets/images/icon-caret-down.svg";
import Button from "../Button";
import Image from "next/image";

const budgetCategories = [
    { value: "entertainment", label: "Entertainment" },
    { value: "bills", label: "Bills" },
    { value: "groceries", label: "Groceries" },
    { value: "dining-out", label: "Dining Out" },
    { value: "transportation", label: "Transortation" },
    { value: "personal-care", label: "Personal Care" },
    { value: "education", label: "Education" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "shopping", label: "Shopping" },
    { value: "general", label: "General" },
];

const budgetThemes = [
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

const AddEditBudget = ({ ...modalProps }) => {
    const [selectedCategory, setSelectedCategory] = useState(
        budgetCategories.find((category) => category.label === modalProps.budgetCategory) || budgetCategories[0]
    );
    const [selectedTheme, setSelectedTheme] = useState(budgetThemes[0]);
    const { closeModal } = useModal();

    return (
        <div className="relative grid gap-[20px]">
            <div className="flex items-center justify-between">
                <h2 className="md:text-[length:var(--font-size-xl)] text-[length:var(--font-size-lg)] font-bold text-[var(--grey-900)]">
                    {modalProps.modalType === "add" ? `Add New` : `Edit`} Budget
                </h2>
                <Image src={closeModalIcon} alt="Close Modal" className="cursor-pointer" onClick={closeModal} />
            </div>
            <p className="text-[length:var(--font-size-sm)] text-[var(--grey-500)]">
                {modalProps.modalType === "add"
                    ? `Choose a category to set a spending budget. These categories can help you monitor spending.`
                    : `As your budgets change, feel free to update your spending limits.`}
            </p>
            <ModalForm
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
                selectedTheme={selectedTheme}
                setSelectedTheme={setSelectedTheme}
            />
            <Button
                primary
                buttonText={modalProps.modalType === "add" ? "Add Budget" : "Save Changes"}
                onClick={closeModal}
            />
            <p className="text-center font-bold text-[length:var(--font-size-sm)] text-[var(--red)]">
                DEMO MODE: Changes will not be saved
            </p>
        </div>
    );
};

export default AddEditBudget;

type ModalFormProps = {
    setSelectedCategory: (category: { value: string; label: string }) => void;
    selectedCategory: { value: string; label: string };
    selectedTheme: { value: string; label: string };
    setSelectedTheme: (theme: { value: string; label: string }) => void;
};
const ModalForm = ({ setSelectedCategory, selectedCategory, selectedTheme, setSelectedTheme }: ModalFormProps) => {
    return (
        <Fieldset className="w-full grid gap-[var(--spacing-s)]">
            <Field className="relative flex flex-col gap-[4px]">
                <Image
                    src={caretDown}
                    width={16}
                    height={16}
                    alt=""
                    className="absolute right-[8px] bottom-[16px] translate-[-50%]"
                />
                <Label className="font-bold text-[length:var(--font-size-xs)] text-[var(--grey-500)]">
                    Budget Category
                </Label>
                <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                    <ListboxButton className="appearance-none pe-[var(--spacing-xxl)] ps-[var(--spacing-md)] py-[var(--spacing-xs)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] focus:border-[var(--grey-900)] focus:outline-none">
                        {selectedCategory.label}
                    </ListboxButton>
                    <ListboxOptions
                        transition
                        className="absolute top-[78px] z-10 w-full max-h-[300px] overflow-y-auto no-scrollbar px-[var(--spacing-md)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] mt-[var(--spacing-xxxs)] opacity-100 transition duration-100 ease-in data-leave:data-closed:opacity-0 focus:border-[var(--grey-900)] focus:outline-none">
                        {budgetCategories.map((category) => (
                            <ListboxOption
                                key={category.value}
                                value={category}
                                className="data-selected:font-bold border-[var(--grey-100)] not-first:border-y-[1px] py-[var(--spacing-xs)] cursor-pointer">
                                {category.label}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>
            </Field>
            <Field className="relative flex flex-col gap-[4px]">
                <div className="absolute bottom-[13px] left-[20px]">
                    <span className="text-[var(--grey-500)]">$</span>
                </div>
                <Label className="font-bold text-[length:var(--font-size-xs)] text-[var(--grey-500)]">
                    Maximum Spend
                </Label>
                <Input
                    name="budget-category"
                    className="appearance-none ps-[42px] pe-[var(--spacing-md)] py-[var(--spacing-xs)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] focus:border-[var(--grey-900)] focus:outline-none"
                    placeholder="e.g. 2000"
                    type="number"
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
                        {budgetThemes.map((theme) => (
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
