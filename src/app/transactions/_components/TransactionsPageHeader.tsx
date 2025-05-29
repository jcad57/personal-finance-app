"use client";
import { useState } from "react";
import { sortOptions, categorOptions } from "../../../_lib/sorting-options";

import InputField from "@/components/Layout/InputField";
import SelectField from "@/components/Layout/SelectField";

const TransactionsPageHeader = () => {
    const [selectedSort, setSelectedSort] = useState(sortOptions[0].text);
    const [selectedCategory, setSelectedCategory] = useState(categorOptions[0].text);

    return (
        <>
            <InputField icon="search" placeholderText="Search transaction" maxWidth="161px" />
            {/* Large Screen */}
            <div className="flex gap-[var(--spacing-lg)]">
                <div className=" flex md:items-center gap-[var(--spacing-xxs)]">
                    <SelectField
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                        sortOptions={sortOptions}
                        minWidth="115px"
                        label="Sort by"
                    />
                </div>
                <div className="flex md:items-center gap-[var(--spacing-xxs)] ">
                    <SelectField
                        selectedSort={selectedCategory}
                        setSelectedSort={setSelectedCategory}
                        sortOptions={categorOptions}
                        minWidth="182px"
                        label="Category"
                    />
                </div>
            </div>

            {/* Small Screen */}
            <div className="flex gap-[var(--spacing-lg)] md:hidden">
                <SelectField
                    icon="sort"
                    selectedSort={selectedSort}
                    setSelectedSort={setSelectedSort}
                    sortOptions={sortOptions}
                    minWidth="115px"
                    label="Sort by"
                />
                <SelectField
                    icon="filter"
                    selectedSort={selectedCategory}
                    setSelectedSort={setSelectedCategory}
                    sortOptions={categorOptions}
                    minWidth="182px"
                    label="Category"
                />
            </div>
        </>
    );
};

export default TransactionsPageHeader;
