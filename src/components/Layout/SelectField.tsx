"use client";
import { Listbox, Label, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { updateSearchParam } from "@/_lib/helpers";
import { SelectFieldProps } from "@/_lib/types";

import Image from "next/image";
import caretDown from "../../../public/assets/images/icon-caret-down.svg";
import sortIconMobile from "../../../public/assets/images/icon-sort-mobile.svg";
import filterIconMobile from "../../../public/assets/images/icon-filter-mobile.svg";

const SelectField = ({ type, options, minWidth, icon }: SelectFieldProps) => {
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const currentValue = searchParams.get(type) || options[0].value;

    function handleChange(newValue: string) {
        const newParams = updateSearchParam(searchParams, type, newValue);
        newParams.delete("page");
        if (newValue) {
            newParams.set(type, newValue);
        } else {
            newParams.delete(type);
        }
        replace(`?${newParams.toString()}`);
    }

    return (
        <div className="flex items-center gap-[var(--spacing-xs)]">
            <Listbox value={currentValue} onChange={handleChange}>
                <Label className="hidden md:inline text-[var(--grey-500)] text-[length:var(--font-size-sm)]">
                    {type[0].toUpperCase() + type.slice(1)}
                </Label>

                <ListboxButton
                    className={` md:relative md:pe-[var(--spacing-xxl)] md:ps-[var(--spacing-md)] md:py-[var(--spacing-xs)] md:rounded-[var(--spacing-xxs)] md:border-1 md:border-[var(--beige-500)] md:bg-[var(--white)] md:text-left text-[var(--grey-900)] md:focus:border-[var(--grey-900)] md:focus:outline-none`}>
                    <span className="hidden md:inline">
                        {options.find((opt: { value: string }) => opt.value === currentValue)?.label}
                    </span>
                    <Image
                        src={caretDown}
                        width={16}
                        height={16}
                        alt="Expand Select"
                        className="absolute hidden md:block right-[8px] top-[50%] translate-[-50%]"
                    />

                    {/* Mobile */}
                    {icon === "sort" && (
                        <Image
                            src={sortIconMobile}
                            width={20}
                            height={20}
                            alt="Sort list"
                            className="cursor-pointer block md:hidden min-w-[20px]"
                        />
                    )}
                    {icon === "filter" && (
                        <Image
                            src={filterIconMobile}
                            width={20}
                            height={20}
                            alt="Filter the results"
                            className="cursor-pointer block md:hidden min-w-[20px]"
                        />
                    )}
                    {icon === "dots" && (
                        <Image
                            src={filterIconMobile}
                            width={20}
                            height={20}
                            alt="Filter the results"
                            className="cursor-pointer"
                        />
                    )}
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom end"
                    transition
                    style={{ minWidth: minWidth || "auto" }}
                    className="select-none px-[var(--spacing-md)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] mt-[var(--spacing-sm)] opacity-100 transition duration-100 ease-in data-leave:data-closed:opacity-0 focus:border-[var(--grey-900)] focus:outline-none shadow-lg">
                    <div className="w-full max-h-[320px] overflow-y-auto no-scrollbar">
                        {options.map((option, index) => (
                            <ListboxOption
                                key={index}
                                value={option.value}
                                className="data-selected:font-bold border-[var(--grey-100)] not-first:border-y-[1px] py-[var(--spacing-xs)] px-[5px] cursor-pointer">
                                {option.label}
                            </ListboxOption>
                        ))}
                    </div>
                </ListboxOptions>
            </Listbox>
        </div>
    );
};

export default SelectField;
