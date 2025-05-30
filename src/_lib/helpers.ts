export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
}

export function formatDate(date: string) {
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
