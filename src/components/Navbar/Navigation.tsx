"use client";
import { usePathname } from "next/navigation";

import homeIcon from "../../../public/assets/images/icon-nav-overview.svg";
import transactionsIcon from "../../../public/assets/images/icon-nav-transactions.svg";
import budgetIcon from "../../../public/assets/images/icon-nav-budgets.svg";
import potsIcon from "../../../public/assets/images/icon-nav-pots.svg";
import billsIcons from "../../../public/assets/images/icon-nav-recurring-bills.svg";
import navLogo from "../../../public/assets/images/logo-large.svg";
import minimizeMenuIcon from "../../../public/assets/images/icon-minimize-menu.svg";

import NavIcon from "./NavIcon";
import Image from "next/image";
import Link from "next/link";

const links = [
    { icon: homeIcon, label: "home", text: "Overview" },
    { icon: transactionsIcon, label: "transactions", text: "Transactions" },
    { icon: budgetIcon, label: "budgets", text: "Budgets" },
    { icon: potsIcon, label: "pots", text: "Pots" },
    { icon: billsIcons, label: "recurring-bills", text: "Recurring Bills" },
];

// TODO: properly set up SVG files
export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="bg-[var(--grey-900)] fixed bottom-0 w-full rounded-t-lg pt-2 px-[var(--spacing-lg)] md:px-[40px] lg:static lg:max-w-[300px] lg:px-0 lg:pr-[var(--spacing-lg)] lg:flex lg:flex-col lg:rounded-t-none lg:rounded-r-[var(--spacing-sm)] lg:pb-[var(--spacing-xxl)] z-100">
            <Link href="/home">
                <Image className="hidden lg:block my-[40px] mx-[var(--spacing-xl)]" src={navLogo} alt="" />
            </Link>
            <div className="flex flex-col justify-between flex-1">
                <ul className="flex justify-between items-center lg:flex-col lg:gap-[var(--spacing-xxxs)] lg:pt-[var(--spacing-lg)]">
                    {links.map((link) => (
                        <NavIcon
                            key={link.label}
                            icon={link.icon}
                            label={link.label}
                            text={link.text}
                            isActive={pathname === `/${link.label}`}
                        />
                    ))}
                    {/* <NavIcon icon={homeIcon} page="home" text="Home" />
                    <NavIcon icon={transactionsIcon} page="transactions" text="Transactions" />
                    <NavIcon icon={budgetIcon} page="budgets" text="Budgets" />
                    <NavIcon icon={potsIcon} page="pots" text="Pots" />
                    <NavIcon icon={billsIcons} page="bills" text="Recurring Bills" /> */}
                </ul>
                <div className="hidden ml-[var(--spacing-xl)] lg:flex">
                    <Image src={minimizeMenuIcon} alt="" className="mx-2" />
                    <span className="ml-[20px] text-[var(--grey-300)] font-bold">Minimize Menu</span>
                </div>
            </div>
        </nav>
    );
}
