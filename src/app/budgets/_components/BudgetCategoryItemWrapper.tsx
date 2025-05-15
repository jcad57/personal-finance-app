import { BudgetOverviewItemProps } from "@/_lib/types";
import { formatCurrency } from "@/_lib/helpers";

import SpendingProgressBar from "./SpendingProgressBar";
import TinyPot from "@/components/Layout/TinyPot";
import LatestSpending from "./LatestSpending";

export default function BudgetCategoryItemWrapper({ maximum, theme, spent }: BudgetOverviewItemProps) {
    return (
        <div className="flex flex-col gap-[var(--spacing-md)]">
            <div className="flex flex-col gap-[var(--spacing-sm)]">
                <span className="text-[var(--grey-500)] text-[length:var(--font-size-sm)]">
                    Maximum of {formatCurrency(maximum)}
                </span>
                <SpendingProgressBar spent={spent} maximum={maximum} theme={theme} />
                <div className="grid grid-cols-2 items-center">
                    <TinyPot title="Spent" amount={spent} theme={theme} />
                    <TinyPot title="Free" amount={maximum - spent} />
                </div>
            </div>
            <LatestSpending />
        </div>
    );
}
