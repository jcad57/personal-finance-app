export interface DataTypes {
    transactions: TransactionOverviewItemProps[];
}

export interface TransactionOverviewItemProps {
    date: string;
    avatar: string;
    name: string;
    amount: number;
}
