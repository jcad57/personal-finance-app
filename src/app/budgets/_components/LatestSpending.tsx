import { More } from "@/components/Layout/Cards/More";
import LatestSpendingItem from "./LatestSpeindingItem";

export default function LatestSpending() {
    return (
        <div className="flex flex-col gap-[var(--spacing-md)] p-[var(--spacing-sm)] md:p-[var(--spacing-md)] bg-[var(--beige-100)] rounded-[12px]">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-[length:var(--font-size-md)]">Latest Spending</h3>
                <More moreText="See All" altText="See All Spending" />
            </div>
            <div className="flex flex-col">
                <LatestSpendingItem />
                <LatestSpendingItem />
                <LatestSpendingItem />
            </div>
        </div>
    );
}
