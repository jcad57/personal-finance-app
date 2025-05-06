"use client";
import { usePathname } from "next/navigation";
import { links } from "@/_lib/links";

import navLogoFull from "../../../public/assets/images/logo-large.svg";
import navLogoMini from "../../../public/assets/images/logo-small.svg";
import minimizeMenuIcon from "../../../public/assets/images/icon-minimize-menu.svg";

import NavIcon from "./NavIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// TODO: properly set up SVG files
export default function Navigation() {
    const pathname = usePathname();
    const [expandNav, setExpandNav] = useState(true);

    const handleExpandNav = () => {
        setExpandNav(!expandNav);
    };

    return (
        <nav
            className={
                (!expandNav && `lg:w-auto `) +
                ` w-full bg-[var(--grey-900)] transition-all duration-300 fixed bottom-0 rounded-t-lg pt-2 px-[var(--spacing-lg)] md:px-[40px] lg:static lg:max-w-[300px] lg:px-0 lg:flex lg:flex-col lg:rounded-t-none lg:rounded-r-[var(--spacing-sm)] lg:pb-[var(--spacing-xxl)] z-100`
            }>
            <Link href="/home">
                <Image
                    className={`hidden lg:block my-[40px] mx-[var(--spacing-xl)] `}
                    src={expandNav ? navLogoFull : navLogoMini}
                    alt=""
                />
            </Link>
            <div className="flex flex-col justify-between flex-1">
                <ul className="flex justify-between items-center lg:flex-col lg:gap-[var(--spacing-xxxs)] lg:pt-[var(--spacing-lg)] lg:pr-[var(--spacing-lg)] ">
                    {links.map((link) => (
                        <NavIcon
                            key={link.label}
                            icon={link.icon}
                            label={link.label}
                            text={link.text}
                            isActive={pathname === `/${link.label}`}
                            expandNav={expandNav}
                        />
                    ))}
                </ul>
                <div
                    className="hidden pl-[var(--spacing-xl)] py-[var(--spacing-s)] mr-[var(--spacing-lg)] rounded-r-lg lg:flex hover:cursor-pointer hover:bg-[#393740] transition-colors duration-75 ease-in"
                    onClick={() => handleExpandNav()}>
                    <Image
                        src={minimizeMenuIcon}
                        alt=""
                        className={(!expandNav && `rotate-180`) + ` mx-2 transition duration-75 ease-in-out`}
                    />
                    {expandNav && (
                        <span className="pl-[20px] text-[var(--grey-300)] font-bold text-[length:var(--font-size-md)]">
                            Minimize Menu
                        </span>
                    )}
                </div>
            </div>
        </nav>
    );
}
