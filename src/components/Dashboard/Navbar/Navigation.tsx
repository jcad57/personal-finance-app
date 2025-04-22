import homeIcon from "../../../../public/assets/images/icon-nav-overview.svg";
import transactionsIcon from "../../../../public/assets/images/icon-nav-transactions.svg";
import budgetIcon from "../../../../public/assets/images/icon-nav-budgets.svg";
import potsIcon from "../../../../public/assets/images/icon-nav-pots.svg";
import billsIcons from "../../../../public/assets/images/icon-nav-recurring-bills.svg";
import NavIcon from "./NavIcon";

// TODO: properly set up SVG files
export default function Navigation({
    currentTab,
    setCurrentTab,
}: {
    currentTab: string;
    setCurrentTab: (tab: string) => void;
}) {
    return (
        <nav className="bg-[var(--grey-900)] fixed bottom-0 w-full rounded-t-lg pt-2 px-4 lg:relative lg:max-w-[300px] md:px-[40px] z-100">
            <ul className="flex justify-between items-center lg:flex-col ">
                <NavIcon icon={homeIcon} tab="home" setCurrentTab={setCurrentTab} currentTab={currentTab} />
                <NavIcon
                    icon={transactionsIcon}
                    tab="transactions"
                    setCurrentTab={setCurrentTab}
                    currentTab={currentTab}
                />
                <NavIcon icon={budgetIcon} tab="budget" setCurrentTab={setCurrentTab} currentTab={currentTab} />
                <NavIcon icon={potsIcon} tab="pots" setCurrentTab={setCurrentTab} currentTab={currentTab} />
                <NavIcon icon={billsIcons} tab="bills" setCurrentTab={setCurrentTab} currentTab={currentTab} />
            </ul>
        </nav>
    );
}
