"use client";
import { useState } from "react";
import data from "../../../public/data.json";
const DATA = data;

import Navigation from "@/components/Dashboard/Navbar/Navigation";
import PotsOverview from "@/components/Dashboard/PotsOverview";
import TextCard from "@/components/Layout/TextCard";
import TransactionsOverview from "@/components/Dashboard/Transactions/TransactionsOverview";
import Budgets from "@/components/Budget/Budgets";
import RecurringBills from "@/components/RecurringBills/RecurringBillsOverview";

let totalSaved = 0;
DATA.pots.forEach((pot) => {
    totalSaved += pot.total;
});

export default function Home() {
    const [currentTab, setCurrentTab] = useState("home");
    return (
        <div className="lg:h-screen lg:flex lg:flex-row-reverse bg-[var(--beige-300)] ">
            <main className="px-[var(--spacing-sm)] py-[var(--spacing-lg)] pb-[52px] lg:w-full lg:pb-0 md:p-[40px] overflow-y-auto">
                <h1 className="text-[length:var(--font-size-xl)] font-bold">Overview</h1>
                <section
                    id="overview"
                    className="flex flex-col md:flex-row gap-[var(--spacing-xs)] my-[var(--spacing-xl)]">
                    <TextCard title="Current Balance" value={DATA.balance.current} primary />
                    <TextCard title="Income" value={DATA.balance.income} />
                    <TextCard title="Expenses" value={DATA.balance.expenses} />
                </section>
                <div className="grid xl:grid-cols-2 gap-[var(--spacing-lg)]">
                    <section id="pots-transactions" className="grid gap-[var(--spacing-xs)] md:gap-[var(--spacing-lg)]">
                        <PotsOverview totalSaved={totalSaved} />
                        <TransactionsOverview data={DATA} />
                    </section>
                    <section
                        id="budget-bills"
                        className="flex flex-col gap-[var(--spacing-sm)] md:gap-[var(--spacing-lg)]">
                        <Budgets />
                        <RecurringBills />
                    </section>
                </div>
            </main>
            <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
    );
}
