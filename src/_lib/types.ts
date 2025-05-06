export interface DataTypes {
    transactions: TransactionOverviewItemProps[];
}

export interface TransactionOverviewItemProps {
    date: string;
    avatar: string;
    name: string;
    amount: number;
}

export interface TransactionItemProps {
    date: string;
    avatar: string;
    name: string;
    amount: number;
    category: string;
    recurring?: boolean;
}

export interface OverviewDataType {
    currentBalance: number;
    currentIncome: number;
    currentExpenses: number;
    potsTotalSaved: number;
}

export interface NavigationTabProps {
    icon: string;
    label: string;
    text: string;
    isActive: boolean;
    expandNav: boolean;
}

export interface InputFieldProps {
    placeholderText?: string;
    icon?: string;
    colorTag?: string;
    prefix?: string;
    helperText?: string;
}
