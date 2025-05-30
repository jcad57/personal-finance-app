"use client";
import { sortOptions, filterOptions } from "../../../_lib/sorting-options";
import InputField from "@/components/Layout/InputField";
import SelectField from "@/components/Layout/SelectField";

const TransactionsPageHeader = () => {
    // const [selectedSort, setSelectedSort] = useState(sortOptions[0].text);
    // const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0].text);

    return (
        <>
            <InputField icon="search" placeholderText="Search transaction" maxWidth="161px" />
            {/* Large Screen */}
            <div className="flex gap-[var(--spacing-lg)]">
                <div className=" flex md:items-center gap-[var(--spacing-xxs)]">
                    <SelectField type="sort" options={sortOptions} minWidth="115px" label="Sort by" />
                </div>
                <div className="flex md:items-center gap-[var(--spacing-xxs)] ">
                    <SelectField type="filter" options={filterOptions} minWidth="182px" label="Category" />
                </div>
            </div>

            {/* Small Screen */}
            <div className="flex gap-[var(--spacing-lg)] md:hidden">
                <SelectField icon="sort" type="sort" options={sortOptions} minWidth="115px" label="Sort by" />
                <SelectField icon="filter" type="filter" options={filterOptions} minWidth="182px" label="Category" />
            </div>
        </>
    );
};

export default TransactionsPageHeader;
