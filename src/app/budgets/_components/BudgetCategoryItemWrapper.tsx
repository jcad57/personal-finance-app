import { BudgetOverviewItemProps } from "@/_lib/types";
import { formatCurrency } from "@/_lib/helpers";

import SpendingProgressBar from "./SpendingProgressBar";
import TinyPot from "@/components/Layout/TinyPot";
import LatestSpending from "./LatestSpending";

export default function BudgetCategoryItemWrapper({
    transactionData,
    category,
    maximum,
    theme,
}: BudgetOverviewItemProps) {
    const filteredTransactions = transactionData.filter((transaction) => {
        return transaction.category === category;
    });
    const totalSpending =
        filteredTransactions.reduce((acc, transaction) => {
            return transaction.amount ? acc + transaction.amount : acc;
        }, 0) * -1;

    return (
        <div className="flex flex-col gap-[var(--spacing-md)]">
            <div className="flex flex-col gap-[var(--spacing-sm)]">
                <span className="text-[var(--grey-500)] text-[length:var(--font-size-sm)]">
                    Maximum of {formatCurrency(maximum)}
                </span>
                <SpendingProgressBar spent={totalSpending} maximum={maximum} theme={theme} />
                <div className="grid grid-cols-2 items-center">
                    <TinyPot title="Spent" amount={totalSpending} theme={theme} />
                    <TinyPot title="Free" amount={maximum - totalSpending} />
                </div>
            </div>
            <LatestSpending category={category} transactionData={transactionData} />
        </div>
    );
}
