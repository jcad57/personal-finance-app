import { More } from "@/components/Layout/Cards/More";
import LatestSpendingItem from "./LatestSpeindingItem";
import { TransactionItemProps } from "@/_lib/types";

export default function LatestSpending({
    category,
    transactionData,
}: {
    category: string;
    transactionData: TransactionItemProps[];
}) {
    const filteredTransactions = transactionData.filter((transaction) => transaction.category === category).slice(0, 3);

    return (
        <div className="flex flex-col gap-[var(--spacing-md)] p-[var(--spacing-sm)] md:p-[var(--spacing-md)] bg-[var(--beige-100)] rounded-[12px]">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-[length:var(--font-size-md)]">Latest Spending</h3>
                <More moreText="See All" altText="See All Spending" path={category} />
            </div>
            <div className="flex flex-col">
                {filteredTransactions.map((transaction, index) => (
                    <LatestSpendingItem
                        key={index}
                        avatar={transaction.avatar}
                        name={transaction.name}
                        amount={transaction.amount}
                        date={transaction.date}
                    />
                ))}
            </div>
        </div>
    );
}
