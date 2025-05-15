import CardHeader from "@/components/Layout/CardHeader";
import LatestSpendingItem from "./LatestSpeindingItem";

export default function LatestSpending() {
    return (
        <div className="flex flex-col gap-[var(--spacing-md)] p-[var(--spacing-sm)] md:p-[var(--spacing-md)] bg-[var(--beige-100)] rounded-[12px]">
            <CardHeader title="Latest Spending" seeAll />
            <div className="flex flex-col">
                <LatestSpendingItem />
                <LatestSpendingItem />
                <LatestSpendingItem />
            </div>
        </div>
    );
}
