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
