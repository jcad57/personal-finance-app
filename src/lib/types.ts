export interface DataTypes {
    transactions: TransactionOverviewItemProps[];
}

export interface TransactionOverviewItemProps {
    date: string;
    avatar: string;
    name: string;
    category: string;
    amount: number;
    recurring: boolean;
}
