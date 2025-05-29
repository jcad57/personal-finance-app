import { TransactionItemProps } from "@/_lib/types";
import { getAllTransactions } from "@/_lib/data-services";

import EmptyCard from "@/components/Layout/EmptyCard";
import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import PageHeader from "@/components/Layout/PageHeader";
import TransactionItem from "@/app/transactions/_components/TransactionItem";

import TransactionsPageHeader from "./TransactionsPageHeader";

export default async function Transactions() {
    const transactions: TransactionItemProps[] = await getAllTransactions();

    return (
        <FullPageWrapper>
            <PageHeader title="Transactions" />
            <EmptyCard>
                <div className="flex gap-[var(--spacing-lg)] justify-between">
                    <TransactionsPageHeader />
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
