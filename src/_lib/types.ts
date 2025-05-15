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

export interface PotsProps {
    data: {
        name: string;
        target: number;
        total: number;
        theme: string;
    }[];
}

export interface PrimaryCardProps extends CardHeaderProps {
    children?: React.ReactNode;
    header?: string;
}

export interface CardHeaderProps {
    title?: string;
    linkTo?: string;
    more?: boolean;
    moreText?: string;
    accentDot?: boolean;
    ellipsis?: boolean;
    accentDotTheme?: string;
    altText?: string;
}

export interface SecondaryCardProps {
    children?: React.ReactNode;
    childrenTop?: boolean;
    title: string;
    value: number;
    accent?: boolean;
}
