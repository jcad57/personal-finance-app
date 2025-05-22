"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { links } from "@/_lib/links";

import navLogoFull from "../../../public/assets/images/logo-large.svg";
import navLogoMini from "../../../public/assets/images/logo-small.svg";
import minimizeMenuIcon from "../../../public/assets/images/icon-minimize-menu.svg";

import NavIcon from "./NavIcon";
import Image from "next/image";
import Link from "next/link";

// TODO: properly set up SVG files
export default function Navigation() {
    const pathname = usePathname();
    const [expandNav, setExpandNav] = useState(true);

    const handleExpandNav = () => {
        setExpandNav(!expandNav);
    };

    return (
        <nav
            className={`transition-all duration-300 ease-in-out overflow-x-hidden
                ${expandNav ? ` lg:w-[330px] ` : ` lg:w-[110px] `}
                w-full bg-[var(--grey-900)] fixed bottom-0 rounded-t-lg pt-2 px-[var(--spacing-lg)] md:px-[40px] lg:static lg:max-w-[300px] lg:px-0 lg:flex lg:flex-col lg:rounded-t-none lg:rounded-r-[var(--spacing-sm)] lg:pb-[var(--spacing-xxl)] z-100`}>
            <div className={`hidden relative lg:block my-[40px] mx-[var(--spacing-xl)]`}>
                <Link href="/home">
                    <Image
                        className={`absolute ${
                            expandNav ? `opacity-100 delay-200 ` : `opacity-0 delay-0`
                        } transition-opacity`}
                        src={navLogoFull}
                        width={121}
                        height={22}
                        alt=""
                    />
                    <Image
                        className={`absolute ${expandNav ? `opacity-0 delay-200 ` : `opacity-100`} transition-opacity`}
                        src={navLogoMini}
                        width={14}
                        height={22}
                        alt=""
                    />
                </Link>
            </div>
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
                    className="hidden pl-[var(--spacing-xl)] py-[var(--spacing-s)] rounded-r-lg lg:flex hover:cursor-pointer hover:bg-[#393740] transition-colors duration-75 ease-in"
                    onClick={() => handleExpandNav()}>
                    <Image
                        src={minimizeMenuIcon}
                        width={22}
                        height={22}
                        alt=""
                        className={(!expandNav && `rotate-180`) + ` mx-2 transition duration-75 ease-in-out`}
                    />

                    <span
                        className={`whitespace-nowrap overflow-hidden ml-[var(--spacing-sm)] text-[var(--grey-300)] font-bold text-[length:var(--font-size-md)] ${
                            expandNav ? `block` : `hidden`
                        }`}>
                        Minimize Menu
                    </span>
                </div>
            </div>
        </nav>
    );
}
