"use client";
import { useSearchParams } from "next/navigation";
import { applySortAndFilter } from "@/_lib/helpers";

import TransactionItem from "./TransactionItem";
import { TransactionItemProps } from "@/_lib/types";

const AllTransactions = ({ transactions }: { transactions: TransactionItemProps[] }) => {
    const searchParams = useSearchParams();
    const sortBy = searchParams.get("sort") || "time_asc";
    const filterBy = searchParams.get("filter") || "all";

    const sorted = applySortAndFilter(transactions, sortBy, filterBy);

    return (
        <div className="flex flex-col">
            {sorted?.map((transaction) => {
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
    );
};

export default AllTransactions;
