import { getBudgets } from "@/_lib/data-services";

import TinyPot from "@/components/Layout/TinyPot";
import BudgetWheel from "@/components/Layout/BudgetWheel";
import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";

export default async function BudgetOverviewCard() {
    const budgets = await getBudgets();
    return (
        <PrimaryCard title="Budgets" more moreText="See Details" linkTo="budgets" altText="See Budget Details">
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
        </PrimaryCard>
    );
}
