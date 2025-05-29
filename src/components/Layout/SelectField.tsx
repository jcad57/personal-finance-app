"use client";
import { Listbox, Label, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { SelectFieldProps } from "@/_lib/types";

import Image from "next/image";
import caretDown from "../../../public/assets/images/icon-caret-down.svg";
import sortIconMobile from "../../../public/assets/images/icon-sort-mobile.svg";
import filterIconMobile from "../../../public/assets/images/icon-filter-mobile.svg";

const SelectField = ({ sortOptions, selectedSort, setSelectedSort, minWidth, label, icon }: SelectFieldProps) => {
    return (
        <div className="flex items-center gap-[var(--spacing-xs)]">
            <Listbox value={selectedSort} onChange={setSelectedSort}>
                <Label className="hidden md:inline text-[var(--grey-500)] text-[length:var(--font-size-sm)]">
                    {label}
                </Label>
                <ListboxButton
                    // style={{ minWidth: minWidth || "auto" }}
                    className={
                        // (colorTag || prefix ? `ps-[48px] ` : `ps-[var(--spacing-md)] `) +
                        ` md:relative md:pe-[var(--spacing-xxl)] md:ps-[var(--spacing-md)] md:py-[var(--spacing-xs)] md:rounded-[var(--spacing-xxs)] md:border-1 md:border-[var(--beige-500)] md:bg-[var(--white)] md:text-left text-[var(--grey-900)] md:focus:border-[var(--grey-900)] md:focus:outline-none`
                    }>
                    <span className="hidden md:inline">{selectedSort}</span>
                    <Image
                        src={caretDown}
                        width={16}
                        height={16}
                        alt=""
                        className="absolute hidden md:block right-[8px] top-[50%] translate-[-50%]"
                    />

                    {/* Mobile */}
                    {icon === "sort" && (
                        <Image
                            src={sortIconMobile}
                            width={20}
                            height={20}
                            alt="Sort list"
                            className="cursor-pointer block md:hidden"
                        />
                    )}
                    {icon === "filter" && (
                        <Image
                            src={filterIconMobile}
                            width={20}
                            height={20}
                            alt="Filter the results"
                            className="cursor-pointer block md:hidden"
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
                    className="select-none px-[var(--spacing-md)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] text-left text-[var(--grey-900)] mt-[var(--spacing-xxxs)] opacity-100 transition duration-100 ease-in data-leave:data-closed:opacity-0 focus:border-[var(--grey-900)] focus:outline-none">
                    <div className="max-h-[320px] overflow-y-auto no-scrollbar">
                        {sortOptions.map((option) => (
                            <ListboxOption
                                key={option.id}
                                value={option.text}
                                className="data-selected:font-bold border-[var(--grey-100)] not-first:border-y-[1px] py-[var(--spacing-xs)] cursor-pointer">
                                {option.text}
                            </ListboxOption>
                        ))}
                    </div>
                </ListboxOptions>
            </Listbox>
        </div>
    );
};

export default SelectField;
