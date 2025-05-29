"use client";
import { sortOptions } from "@/_lib/sorting-options";
import { useState } from "react";
import { RecurringBillsWrapperProps } from "@/_lib/types";

import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import InputField from "@/components/Layout/InputField";
import SelectField from "@/components/Layout/SelectField";
import BillItem from "./BillItem";
import BillItemsTable from "./BillItemsTable";

const RecurringBillsWrapper = ({ recurringBills }: RecurringBillsWrapperProps) => {
    const [selectedSort, setSelectedSort] = useState(sortOptions[0].text);

    return (
        <div className="lg:col-span-2">
            <PrimaryCard>
                <div className="flex items-center justify-between">
                    <InputField placeholderText="Search bills" icon="search" />
                    <SelectField
                        sortOptions={sortOptions}
                        setSelectedSort={setSelectedSort}
                        selectedSort={selectedSort}
                        icon="sort"
                        label="Sort by"
                        minWidth="115px"
                    />
                </div>
                {/* Mobile Layout: List */}
                <section id="All Recurring Bills List" className="md:hidden">
                    {recurringBills.map((bill) => (
                        <BillItem
                            key={bill.id}
                            date={bill.date}
                            avatar={bill.avatar}
                            name={bill.name}
                            amount={bill.amount}
                        />
                    ))}
                </section>

                {/* Desktop/Tablet Layout: Table */}
                <section id="All Recurring Bills Table" className="hidden md:block">
                    <BillItemsTable recurringBills={recurringBills} />
                </section>
            </PrimaryCard>
        </div>
    );
};

export default RecurringBillsWrapper;
