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
    const sortBy = searchParams.get("sort") || "time_desc";
    const filterBy = searchParams.get("filter") || "all";
    const searchBy = searchParams.get("search") || "";

    const sorted = applySortAndFilter(recurringBills, sortBy, filterBy, searchBy);

    return (
        <div className="lg:col-span-2">
            <PrimaryCard>
                <div className="flex items-center justify-between">
                    <InputField placeholderText="Search bills" icon="search" />
                    <SelectField type="sort" options={sortOptions} minWidth="115px" icon="sort" />
                </div>
                {/* Mobile Layout: List */}
                <section id="All Recurring Bills List" className="md:hidden">
                    {sorted.length > 0 ? (
                        sorted.map((bill, index) => (
                            <BillItem
                                key={index}
                                date={bill.date}
                                avatar={bill.avatar}
                                name={bill.name}
                                amount={bill.amount}
                            />
                        ))
                    ) : (
                        <div className="text-center text-[var(--grey-500)] py-[20px]">No recurring bills found.</div>
                    )}
                </section>

                {/* Desktop/Tablet Layout: Table */}
                <section id="All Recurring Bills Table" className="hidden md:block">
                    <BillItemsTable recurringBills={sorted} />
                </section>
            </PrimaryCard>
        </div>
    );
};

export default RecurringBillsWrapper;
