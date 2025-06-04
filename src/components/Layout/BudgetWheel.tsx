"use client";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { doughnutData, budgetLimit } from "@/_lib/budget-wheel-data";

ChartJS.register(ArcElement, Legend);

export default function BudgetWheel({ totalSpending }: { totalSpending: number }) {
    const options = {
        maintainAspectRatio: true,
        responsive: false,
    };
    return (
        <div className="relative grid place-items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <p className="text-[length:var(--font-size-xl)] font-bold">${Math.ceil(totalSpending)}</p>
                <p className="text-[length:var(--font-size-xs)] text-[var(--grey-500)] text-center">
                    of ${budgetLimit} limit
                </p>
            </div>
            <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[175px] h-[175px] bg-[var(--white)] rounded-full opacity-[50%] z-10"></div>
            <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-[var(--white)] rounded-full z-0"></div>
            {/* TODO: Add a tooltip to show the budget name and amount when hovering over the segments */}

            <Doughnut data={doughnutData} options={options} width={240} height={240} />
        </div>
    );
}
