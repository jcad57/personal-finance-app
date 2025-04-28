"use client";
import Navigation from "@/components/Navbar/Navigation";
import Overview from "@/components/Dashboard/Overview";

import { useState } from "react";

export default function Home() {
    const [currentTab, setCurrentTab] = useState("home");
    return (
        <div className="lg:h-screen lg:flex lg:flex-row-reverse bg-[var(--beige-300)] ">
            <Overview />
            <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
    );
}
