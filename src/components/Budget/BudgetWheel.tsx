import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import data from "../../../public/data.json";
ChartJS.register(ArcElement, Legend);

const budgetAmount = data.budgets.map((budget) => budget.maximum);
const budgetColors = data.budgets.map((budget) => budget.theme);

const doughnutData = {
    labels: [],
    datasets: [
        {
            data: budgetAmount,
            backgroundColor: budgetColors,
            borderColor: [],
            borderWidth: 0,
        },
    ],
};

export default function BudgetWheel() {
    return (
        <div className="justify-self-center max-w-[240px]">
            <Doughnut data={doughnutData} />
        </div>
    );
}
