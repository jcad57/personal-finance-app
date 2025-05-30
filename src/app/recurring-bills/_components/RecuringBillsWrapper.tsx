"use client";
import { sortOptions } from "@/_lib/sorting-options";
import { RecurringBillsProps } from "@/_lib/types";
import { useSearchParams } from "next/navigation";
import { applySortAndFilter } from "@/_lib/helpers";

import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import InputField from "@/components/Layout/InputField";
import SelectField from "@/components/Layout/SelectField";
import BillItem from "./BillItem";
import BillItemsTable from "./BillItemsTable";

const RecurringBillsWrapper = ({ recurringBills }: { recurringBills: RecurringBillsProps[] }) => {
    const searchParams = useSearchParams();
    const sortBy = searchParams.get("sort") || "time_asc";

    const sorted = applySortAndFilter(recurringBills, sortBy);

    return (
        <div className="lg:col-span-2">
            <PrimaryCard>
                <div className="flex items-center justify-between">
                    <InputField placeholderText="Search bills" icon="search" />
                    <SelectField type="sort" options={sortOptions} minWidth="115px" label="Sort by" icon="sort" />
                </div>
                {/* Mobile Layout: List */}
                <section id="All Recurring Bills List" className="md:hidden">
                    {sorted.map((bill, index) => (
                        <BillItem
                            key={index}
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
