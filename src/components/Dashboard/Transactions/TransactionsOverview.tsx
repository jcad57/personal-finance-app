import OverviewCard from "../../Layout/OverviewCardDetailed";
import TransactionOverviewItem from "./TransactionOverviewItem";

import { getAllTransactions } from "@/_lib/data-services";
import { TransactionOverviewItemProps } from "@/_lib/types";

export default async function TransactionsOverview() {
    const allTransactions = await getAllTransactions();
    const transactionOverview = Array.from(allTransactions).slice(0, 5);
    return (
        <OverviewCard title="Transactions" viewAll>
            <div className="flex flex-col">
                {transactionOverview.map((transaction: TransactionOverviewItemProps) => (
                    <TransactionOverviewItem
                        key={transaction.date}
                        avatar={transaction.avatar}
                        name={transaction.name}
                        date={transaction.date}
                        amount={transaction.amount}
                    />
                ))}
            </div>
        </OverviewCard>
    );
}
