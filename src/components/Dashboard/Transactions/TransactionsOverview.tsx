import OverviewCard from "../../Layout/OverviewCard";
import TransactionOverviewItem from "./TransactionOverviewItem";

import { DataTypes, TransactionOverviewItemProps } from "@/lib/types";

export default function TransactionsOverview({ data }: { data: DataTypes }) {
    const transactionOverview = Array.from(data.transactions).slice(0, 5);
    return (
        <OverviewCard title="Transactions" viewAll>
            <div className="flex flex-col">
                {transactionOverview.map((transaction: TransactionOverviewItemProps) => (
                    <TransactionOverviewItem
                        key={transaction.date}
                        avatar={transaction.avatar}
                        name={transaction.name}
                        category={transaction.category}
                        date={transaction.date}
                        amount={transaction.amount}
                        recurring={transaction.recurring}
                    />
                ))}
            </div>
        </OverviewCard>
    );
}
