import Image from "next/image";

import iconCaretRight from "../../../public/assets/images/icon-caret-right.svg";
import totalSavedIcon from "../../../public/assets/images/icon-pot.svg";
import TinyPot from "./TinyPot";

import data from "../../../public/data.json";
import OverviewCard from "../Layout/OverviewCard";

const potsOverview = data.pots.slice(0, 4);

export default function PotsOverview({ totalSaved }: { totalSaved: number }) {
    return (
        <OverviewCard title="Pots" seeDetails>
            <div className="grid gap-[var(--spacing-sm)] md:grid-cols-2 ">
                <div className="flex align-center p-[var(--card-padding)] gap-[var(--spacing-sm)] bg-[var(--beige-100)] rounded-[var(--card-border-radius)]">
                    <Image src={totalSavedIcon} alt="" />
                    <div>
                        <p>Total Saved</p>
                        <span className="text-[length:var(--font-size-xl)] font-bold">${totalSaved}</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-[var(--spacing-sm)]">
                    {potsOverview.map((pot) => (
                        <TinyPot key={pot.name} title={pot.name} amount={pot.total} color={pot.theme} />
                    ))}
                </div>
            </div>
        </OverviewCard>
    );
}
