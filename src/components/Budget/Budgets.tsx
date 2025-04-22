import TinyPot from "../Dashboard/TinyPot";
import OverviewCard from "../Layout/OverviewCard";
import BudgetWheel from "./BudgetWheel";
import data from "../../../public/data.json";
export default function Budgets() {
    return (
        <OverviewCard title="Budgets" seeDetails>
            <div className="flex flex-col md:items-center md:flex-row gap-[var(--spacing-md)] md:p-[var(--spacing-xl)]">
                <div className="md:grow">
                    <BudgetWheel />
                </div>
                <div className="grid grid-cols-2 md:flex md:flex-col gap-[var(--spacing-sm)]">
                    {data.budgets.map((budget) => (
                        <TinyPot
                            key={budget.category}
                            title={budget.category}
                            amount={budget.maximum}
                            color={budget.theme}
                        />
                    ))}
                </div>
            </div>
        </OverviewCard>
    );
}
