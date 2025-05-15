import { NavigationTabProps } from "@/_lib/types";

import Image from "next/image";
import Link from "next/link";

export default function NavIcon({ icon, label, text, isActive }: NavigationTabProps) {
    return (
        <Link href={`/${label}`} className="w-full  ">
            <li
                className={
                    `py-[var(--spacing-xs)] md:flex md:flex-col md:gap-2 lg:flex-row md:items-center rounded-t-lg border-b-4 lg:rounded-t-none lg:rounded-r-lg  lg:py-[var(--spacing-sm)] lg:border-b-0` +
                    (isActive
                        ? ` bg-[var(--white)] border-[var(--green)] lg:border-l-4 lg:border-b-0 `
                        : ` border-transparent bg-none hover:bg-[#393740] transition-colors duration-75 ease-in`)
                }>
                <Image
                    className={
                        (isActive ? `lg:ml-[28px]` : `lg:ml-[var(--spacing-xl)]`) +
                        ` lg:mr-[var(--spacing-xl)] mr-auto ml-auto min-w-[24px] min-h-[24px]`
                    }
                    src={icon}
                    alt={label}
                    width={24}
                    height={24}
                />

                <span
                    className={
                        `hidden whitespace-nowrap overflow-hidden md:inline lg:text-[length:var(--font-size-md)] font-bold text-[length:var(--font-size-xs)]` +
                        (isActive ? ` text-[var(--grey-900)]` : ` text-[var(--grey-300)]`)
                    }>
                    {text}
                </span>
            </li>
        </Link>
    );
}
