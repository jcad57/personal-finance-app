import { getAllTransactions } from "@/_lib/data-services";
import { TransactionItemProps } from "@/_lib/types";

import EmptyCard from "@/components/Layout/EmptyCard";
import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import PageHeader from "@/components/Layout/PageHeader";
import TransactionsPageHeader from "./TransactionsPageHeader";
import AllTransactions from "./AllTransaction";

export default async function Transactions() {
    const transactions: TransactionItemProps[] = await getAllTransactions();

    return (
        <FullPageWrapper>
            <PageHeader title="Transactions" />
            <EmptyCard>
                <div className="flex gap-[var(--spacing-lg)] justify-between">
                    <TransactionsPageHeader />
                </div>
                <AllTransactions transactions={transactions} />
            </EmptyCard>
        </FullPageWrapper>
    );
}
