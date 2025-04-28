import TinyPot from "../Pots/TinyPot";
import OverviewCardDetailed from "../../Layout/OverviewCardDetailed";
import BudgetWheel from "./BudgetWheel";
import { getBudgets } from "@/_lib/data-services";
// import data from "../../../../public/data.json";

export default async function BudgetOverviewCard() {
    const budgets = await getBudgets();
    return (
        <OverviewCardDetailed title="Budgets" seeDetails>
            <div className="flex flex-col md:items-center md:flex-row gap-[var(--spacing-md)] md:p-[var(--spacing-xl)]">
                <div className="md:grow">
                    <BudgetWheel />
                </div>
                <div className="grid grid-cols-2 md:flex md:flex-col gap-[var(--spacing-sm)]">
                    {budgets.map((budget) => (
                        <TinyPot
                            key={budget.category}
                            title={budget.category}
                            amount={budget.maximum}
                            color={budget.theme}
                        />
                    ))}
                </div>
            </div>
        </OverviewCardDetailed>
    );
}
