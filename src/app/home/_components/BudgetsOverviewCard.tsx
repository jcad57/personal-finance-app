import { getBudgets } from "@/_lib/data-services";

import TinyPot from "@/components/Layout/TinyPot";
import OverviewCardDetailed from "../../../app/home/_components/OverviewCardDetailed";
import BudgetWheel from "@/components/Layout/BudgetWheel";

export default async function BudgetOverviewCard() {
    const budgets = await getBudgets();
    return (
        <OverviewCardDetailed title="Budgets" seeDetails>
            <div className="flex flex-col md:items-center md:flex-row gap-[var(--spacing-md)] md:p-[var(--spacing-xl)]">
                <div className="grid w-full">
                    <BudgetWheel />
                </div>
                <div className="grid grid-cols-2 md:flex md:flex-col gap-[var(--spacing-sm)]">
                    {budgets.map((budget) => (
                        <TinyPot
                            key={budget.category}
                            title={budget.category}
                            amount={budget.maximum}
                            theme={budget.theme}
                        />
                    ))}
                </div>
            </div>
        </OverviewCardDetailed>
    );
}
