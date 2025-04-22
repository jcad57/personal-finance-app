import Image from "next/image";

export default function NavIcon({
    icon,
    tab,
    currentTab,
    setCurrentTab,
}: {
    icon: string;
    tab: string;
    currentTab: string;
    setCurrentTab: (tab: string) => void;
}) {
    return (
        <li
            className={`py-2 w-full ${
                currentTab === tab ? `bg-[var(--white)] rounded-t-lg border-b-4 border-[var(--green)]` : ``
            }`}
            onClick={() => setCurrentTab(tab)}>
            <Image className="mx-auto aspect-square" src={icon} alt={tab} width={24} height={24} />
        </li>
    );
}
