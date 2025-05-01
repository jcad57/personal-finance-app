import Image from "next/image";
import { NavigationTabProps } from "@/_lib/types";

export default function NavIcon({ icon, tab, text }: NavigationTabProps) {
    return (
        <li
            className={`py-2 w-full bg-[var(--white)] rounded-t-lg border-b-4 border-[var(--green)] lg:border-l-4 lg:border-b-0 lg:rounded-t-none lg:rounded-r-lg lg:flex lg:py-[var(--spacing-sm)]`}>
            <Image
                className="mx-auto lg:mx-0 lg:ml-[var(--spacing-xl)] aspect-square"
                src={icon}
                alt={tab}
                width={24}
                height={24}
            />

            {/* <span className="ml-[20px] text-[var(--grey-900)] font-bold">{text}</span> */}
        </li>
    );
}
