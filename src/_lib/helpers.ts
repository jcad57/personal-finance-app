import { RecurringBillsProps, TransactionItemProps } from "./types";

export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
}

export function formatDate(date: string | number) {
    if (typeof date === "number") return;
    return new Date(date).toLocaleDateString("en-UK", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

export function updateSearchParam(params: URLSearchParams, key: string, value: string) {
    const newParams = new URLSearchParams(params);
    newParams.set(key, value);
    newParams.delete("page"); // reset pagination
    return newParams;
}

export function applySortAndFilter<
    T extends {
        name: string;
        date: string | number;
        amount: number;
        category?: string;
        avatar?: string;
    }
>(data: T[], sortBy: string, filterBy?: string, searchBy?: string): T[] {
    let filteredData = data;

    if (filterBy && filterBy !== "all") {
        filteredData = data.filter((item) => item.category?.toLowerCase().split(" ").join("_") === filterBy);
    }

    if (sortBy === "time_asc") {
        filteredData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "time_desc") {
        filteredData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sortBy === "name_asc") {
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name_desc") {
        filteredData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "amount_desc") {
        filteredData.sort((a, b) => b.amount - a.amount);
    } else if (sortBy === "amount_asc") {
        filteredData.sort((a, b) => a.amount - b.amount);
    }

    if (searchBy) {
        filteredData = filteredData.filter((item) => {
            return item.name.toLowerCase().includes(searchBy.toLowerCase());
        });
    }

    return filteredData;
}

export function filterBudgetTotalSpending(data: TransactionItemProps[]) {
    const total = data.reduce((acc, item) => {
        if (
            item.category === "Entertainment" ||
            item.category === "Dining Out" ||
            item.category === "Bills" ||
            item.category === "Personal Care"
        ) {
            return item.amount ? acc + item.amount : acc;
        } else return acc;
    }, 0);

    return total * -1;
}

export function getPaidBills(bills: RecurringBillsProps[]) {
    let numberOfPaidBills = 0;
    const paidBills = bills
        .filter((bill) => bill.status === "paid")
        .reduce((acc, bill) => {
            numberOfPaidBills++;
            return acc + bill.amount;
        }, 0);

    return { paidBills, numberOfPaidBills };
}

export function getUpcomingBills(bills: RecurringBillsProps[]) {
    let numberOfUpcomingBills = 0;
    const upcomingBills = bills
        .filter((bill) => {
            const today = new Date();
            return bill.status === "due" && bill.date > today.getDate() && bill.amount;
        })
        .reduce((acc, bill) => {
            numberOfUpcomingBills++;
            return acc + bill.amount;
        }, 0);

    return { upcomingBills, numberOfUpcomingBills };
}

export function getDueSoonBills(bills: RecurringBillsProps[]) {
    let numberOfDueSoonBills = 0;
    const dueSoon = bills
        .filter((bill) => {
            const today = new Date();
            return bill.status === "due" && bill.date > today.getDate() && bill.date - today.getDate() <= 3;
        })
        .reduce((acc, bill) => {
            numberOfDueSoonBills++;
            return acc + bill.amount;
        }, 0);

    return { dueSoon, numberOfDueSoonBills };
}
