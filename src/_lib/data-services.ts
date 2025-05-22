import { supabase } from "@/_database/supabase";

async function getCurrentBalance() {
    const { data, error } = await supabase.from("balance").select("current").single();

    if (error) {
        console.error(error);
        throw new Error("Error fetching current balance");
    }

    return data;
}

async function getCurrentIncome() {
    const { data, error } = await supabase.from("balance").select("income").single();

    if (error) {
        console.error(error);
        throw new Error("Error fetching current income");
    }

    return data;
}

async function getCurrentExpenses() {
    const { data, error } = await supabase.from("balance").select("expenses").single();

    if (error) {
        console.error(error);
        throw new Error("Error fetching current expenses");
    }

    return data;
}

export async function getAllTransactions() {
    const { data: transactions, error } = await supabase
        .from("transactions")
        .select("*")
        .order("date", { ascending: false });

    if (error) {
        console.error(error);
        throw new Error("Error fetching current balance");
    }

    return transactions;
}

export async function getAllPots() {
    const { data, error } = await supabase.from("pots").select("*");

    if (error) {
        console.error(error);
        throw new Error("Error fetching current balance");
    }

    return { data };
}

export async function getBudgets() {
    const { data, error } = await supabase.from("budgets").select("*");

    if (error) {
        console.error(error);
        throw new Error("Error fetching budgets");
    }

    return data;
}

export async function getRecurringBills() {
    const { data, error } = await supabase.from("recurring-bills").select("*").order("date", { ascending: true });

    if (error) {
        console.error(error);
        throw new Error("Error fetching budgets");
    }

    return data;
}

export async function getOverviewData() {
    const [{ current: currentBalance }, { income: currentIncome }, { expenses: currentExpenses }, { data: potsData }] =
        await Promise.all([getCurrentBalance(), getCurrentIncome(), getCurrentExpenses(), getAllPots()]);

    const potsTotalSaved = potsData.reduce((acc, pot) => acc + pot.total, 0);

    return {
        currentBalance,
        currentIncome,
        currentExpenses,
        potsTotalSaved,
    };
}
