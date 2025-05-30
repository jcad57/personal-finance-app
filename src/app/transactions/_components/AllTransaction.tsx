"use client";
import { useSearchParams } from "next/navigation";
import { applySortAndFilter } from "@/_lib/helpers";
import { TransactionItemProps } from "@/_lib/types";

import TransactionItem from "./TransactionItem";

const AllTransactions = ({ transactions }: { transactions: TransactionItemProps[] }) => {
    const sortParams = useSearchParams();
    const sortBy = sortParams.get("sort") || "time_asc";
    const filterBy = sortParams.get("filter") || "all";
    const searchBy = sortParams.get("search") || "";

    const sorted = applySortAndFilter(transactions, sortBy, filterBy, searchBy);

    return (
        <div className="flex flex-col">
            {sorted.length > 0 ? (
                sorted.map((transaction) => {
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
                })
            ) : (
                <div className="text-center text-[var(--grey-500)] py-[var(--spacing-lg)]">No transactions found.</div>
            )}
        </div>
    );
};

export default AllTransactions;
