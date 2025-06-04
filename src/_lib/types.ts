export interface DataTypes {
    transactions: TransactionOverviewItemProps[];
    budgets: BudgetOverviewItemProps[];
}

export interface TransactionOverviewItemProps {
    date: string | number;
    avatar: string;
    name: string;
    amount: number;
}

export interface TransactionItemProps extends TransactionOverviewItemProps {
    category?: string;
    recurring?: boolean;
}

export interface BudgetCategoryProps {
    category: string;
    maximum: number;
    theme: string;
}

export interface BudgetOverviewItemProps {
    transactionData: TransactionItemProps[];
    category: string;
    maximum: number;
    theme: string;
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
    maxWidth?: string;
    isDisabled?: boolean;
    onClick?: () => void;
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
    title?: string;
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
    editLabel?: string;
    deleteLabel?: string;
    onEditClick?: () => void;
    onDeleteClick?: () => void;
}

export interface SecondaryCardProps {
    children?: React.ReactNode;
    childrenTop?: boolean;
    title: string;
    value: number;
    accent?: boolean;
    grow?: boolean;
}

export interface RecurringBillsProps {
    id?: string;
    status?: "paid" | "due";
    name: string;
    date: number;
    amount: number;
    avatar: string;
}

export interface SelectFieldProps {
    type: string;
    options: { value: string; label: string }[];
    minWidth?: string;
    icon?: string;
}
