export interface DataTypes {
    transactions: TransactionOverviewItemProps[];
    budgets: BudgetOverviewItemProps[];
}

export interface TransactionOverviewItemProps {
    date: string;
    avatar: string;
    name: string;
    amount: number;
}

export interface TransactionItemProps extends TransactionOverviewItemProps {
    category: string;
    recurring?: boolean;
}

export interface BudgetOverviewItemProps {
    category: string;
    maximum: number;
    theme: string;
    spent: number;
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
