"use client";
import { sortOptions, filterOptions } from "../../../_lib/sorting-options";

import InputField from "@/components/Layout/InputField";
import SelectField from "@/components/Layout/SelectField";

const TransactionsPageHeader = () => {
    return (
        <div className="flex items-center justify-between w-full">
            <InputField icon="search" placeholderText="Search transaction" />

            {/* Large Screen */}
            <div className="hidden md:flex gap-[var(--spacing-lg)]">
                <div className=" flex md:items-center gap-[var(--spacing-xxs)]">
                    <SelectField type="sort" options={sortOptions} />
                </div>
                <div className="flex md:items-center gap-[var(--spacing-xxs)] ">
                    <SelectField type="filter" options={filterOptions} />
                </div>
            </div>

            {/* Small Screen */}
            <div className="flex gap-[var(--spacing-lg)] md:hidden">
                <SelectField icon="sort" type="sort" options={sortOptions} />
                <SelectField icon="filter" type="filter" options={filterOptions} />
            </div>
        </div>
    );
};

export default TransactionsPageHeader;
