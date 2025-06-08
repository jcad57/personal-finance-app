import { NavigationTabProps } from "@/_lib/types";

import Link from "next/link";
import HomeIcon from "../Layout/SVGComponets/HomeIcon";
import TransactionIcon from "../Layout/SVGComponets/TransactionsIcon";
import BudgetsIcon from "../Layout/SVGComponets/BudgetsIcon";
import PotsIcon from "../Layout/SVGComponets/PotsIcon";
import RecurringBillsIcon from "../Layout/SVGComponets/RecurringBillsIcon";
import { JSX } from "react";

export default function NavIcon({ label, text, isActive, expandNav }: NavigationTabProps) {
    function renderIcon(iconName: string, isActive: boolean): JSX.Element | null {
        switch (iconName) {
            case "home":
                return <HomeIcon isActive={isActive} />;
            case "transactions":
                return <TransactionIcon isActive={isActive} />;
            case "budgets":
                return <BudgetsIcon isActive={isActive} />;
            case "pots":
                return <PotsIcon isActive={isActive} />;
            case "recurring-bills":
                return <RecurringBillsIcon isActive={isActive} />;
            default:
                return null;
        }
    }

    return (
        <li
            className={
                `w-full hover:cursor-pointer py-[var(--spacing-xs)] rounded-t-lg border-b-4 lg:rounded-t-none lg:rounded-r-lg lg:py-[var(--spacing-sm)] lg:border-b-0 ` +
                (isActive
                    ? `bg-[var(--white)] border-[var(--green)] lg:border-l-4 lg:border-b-0 `
                    : `border-transparent bg-none hover:bg-[#393740] transition-colors duration-75 ease-in`)
            }>
            <Link
                href={`/${label}`}
                className="w-full flex items-center justify-center md:flex-col md:gap-2 lg:flex-row lg:justify-start">
                <div className={(isActive ? `lg:ml-[28px]` : `lg:ml-[32px]`) + ` lg:mr-[16px]`}>
                    {renderIcon(label, isActive)}
                </div>
                <span
                    className={
                        `hidden whitespace-nowrap overflow-hidden md:inline lg:text-[length:var(--font-size-md)] font-bold text-[length:var(--font-size-xs)] transition-opacity delay-200` +
                        (isActive ? ` text-[var(--grey-900)]` : ` text-[var(--grey-300)]`) +
                        (expandNav ? ` opacity-100` : ` opacity-0 `)
                    }>
                    {text}
                </span>
            </Link>
        </li>
    );
}
