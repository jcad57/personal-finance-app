import { TransactionItemProps } from "@/_lib/types";
import EmptyCard from "@/components/Layout/EmptyCard";
import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import InputField from "@/components/Layout/InputField";
import PageHeader from "@/components/Layout/PageHeader";
import TransactionItem from "@/app/transactions/_components/TransactionItem";
import Image from "next/image";

import sortIconMobile from "../../../../public/assets/images/icon-sort-mobile.svg";
import filterIconMobile from "../../../../public/assets/images/icon-filter-mobile.svg";

//TODO: Add a pagination component to the transactions list
export default function Transactions({ transactions }: { transactions: TransactionItemProps[] }) {
    console.log(transactions);
    return (
        <FullPageWrapper>
            <PageHeader title="Transactions" />
            <EmptyCard>
                <div className="flex gap-[var(--spacing-lg)] justify-between">
                    <InputField icon="search" placeholderText="Search transaction" maxWidth="161px" />
                    {/* Large Screen */}
                    <div className="hidden md:flex gap-[var(--spacing-lg)]">
                        <div className=" flex md:items-center gap-[var(--spacing-xxs)]">
                            <span className="text-[length:var(--font-size-sm)] text-[var(--grey-500)]">Sort by</span>
                            <InputField icon="caret" placeholderText="Latest" maxWidth="114px" isDisabled={true} />
                        </div>
                        <div className="hidden md:flex md:items-center gap-[var(--spacing-xxs)]">
                            <span className="text-[length:var(--font-size-sm)] text-[var(--grey-500)]">Category</span>
                            <InputField
                                icon="caret"
                                placeholderText="All Transactions"
                                maxWidth="177px"
                                isDisabled={true}
                            />
                        </div>
                    </div>

                    {/* Small Screen */}
                    <div className="flex gap-[var(--spacing-lg)] px-[var(--spacing-lg)] md:hidden">
                        <Image src={sortIconMobile} width={20} height={20} alt="Sort list" className="cursor-pointer" />
                        <Image
                            src={filterIconMobile}
                            width={20}
                            height={20}
                            alt="Filter the results"
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    {transactions?.map((transaction) => {
                        return (
                            <TransactionItem
                                key={transaction.date}
                                date={transaction.date}
                                avatar={transaction.avatar}
                                name={transaction.name}
                                amount={transaction.amount}
                                category={transaction.category}
                            />
                        );
                    })}
                </div>
            </EmptyCard>
        </FullPageWrapper>
    );
}
