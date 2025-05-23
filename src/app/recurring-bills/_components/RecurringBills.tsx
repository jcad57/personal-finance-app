import { RecurringBillsProps } from "@/_lib/types";
import { getRecurringBills } from "@/_lib/data-services";

import filterIconMobile from "../../../../public/assets/images/icon-sort-mobile.svg";
import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import SecondaryCard from "@/components/Layout/Cards/SecondaryCard";
import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import PageHeader from "@/components/Layout/PageHeader";
import BillItem from "./BillItem";
import InputField from "@/components/Layout/InputField";
import Summary from "./Summary";
import Image from "next/image";
import BillItemsTable from "./BillItemsTable";

export default async function RecurringBills() {
    const recurringBills: RecurringBillsProps[] = await getRecurringBills();
    return (
        <FullPageWrapper>
            <PageHeader title="Recurring Bills" />
            <section id="Recurring Bills">
                <div className="grid lg:grid-cols-3  gap-[var(--spacing-lg)]">
                    <div className="flex flex-col gap-[var(--spacing-xs)] md:grid md:grid-cols-2 md:flex-row md:gap-[var(--spacing-lg)] lg:flex lg:flex-col">
                        <SecondaryCard title="Total bills" accent value={384.98} />
                        <PrimaryCard title="Summary">
                            <Summary />
                        </PrimaryCard>
                    </div>
                    <div className="lg:col-span-2">
                        <PrimaryCard>
                            <div className="flex items-center justify-between">
                                <InputField placeholderText="Search bills" icon="search" />
                                <div className="hidden md:flex items-center md:gap-[var(--spacing-xs)]">
                                    <span className="text-[var(--grey-500)] text-[length:var(--font-size-sm)]">
                                        Sort by
                                    </span>
                                    <InputField
                                        placeholderText="Latest"
                                        icon="sort"
                                        maxWidth="113px"
                                        isDisabled={true}
                                    />
                                </div>
                                <div className="flex md:hidden">
                                    <Image
                                        src={filterIconMobile}
                                        width={20}
                                        height={20}
                                        alt="Filter the results"
                                        className="cursor-pointer"
                                    />
                                </div>
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
                </div>
            </section>
        </FullPageWrapper>
    );
}
