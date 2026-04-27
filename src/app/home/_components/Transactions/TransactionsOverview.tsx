import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import TransactionOverviewItem from "./TransactionOverviewItem";

import { getAllTransactions } from "@/lib/data-services";
import { TransactionOverviewItemProps } from "@/lib/types";

export default async function TransactionsOverview() {
  const allTransactions = await getAllTransactions();
  const transactionOverview = Array.from(allTransactions).slice(0, 5);
  return (
    <PrimaryCard
      title="Transactions"
      linkTo="transactions"
      more
      moreText="View all"
      altText="View All Transactions"
    >
      <div className="flex flex-col">
        {transactionOverview.map(
          (transaction: TransactionOverviewItemProps) => (
            <TransactionOverviewItem
              key={transaction.date}
              avatar={transaction.avatar}
              name={transaction.name}
              date={transaction.date}
              amount={transaction.amount}
            />
          ),
        )}
      </div>
    </PrimaryCard>
  );
}
