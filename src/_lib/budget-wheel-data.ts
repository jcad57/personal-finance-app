import { getBudgets } from "./data-services";

const data = await getBudgets();

const budgetAmount = data.map((budget) => budget.maximum);
const budgetColors = data.map((budget) => budget.theme);

export const doughnutData = {
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

export const budgetLimit = data.reduce((acc, budget) => acc + budget.maximum, 0);
