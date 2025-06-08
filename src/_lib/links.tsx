import HomeIcon from "@/components/Layout/SVGComponets/HomeIcon";
import TransactionIcon from "@/components/Layout/SVGComponets/TransactionsIcon";
import BudgetsIcon from "@/components/Layout/SVGComponets/BudgetsIcon";
import PotsIcon from "@/components/Layout/SVGComponets/PotsIcon";
import RecurringBillsIcon from "@/components/Layout/SVGComponets/RecurringBillsIcon";

export const links = [
    { icon: <HomeIcon />, label: "home", text: "Overview" },
    { icon: <TransactionIcon />, label: "transactions", text: "Transactions" },
    { icon: <BudgetsIcon />, label: "budgets", text: "Budgets" },
    { icon: <PotsIcon />, label: "pots", text: "Pots" },
    { icon: <RecurringBillsIcon />, label: "recurring-bills", text: "Recurring Bills" },
];
