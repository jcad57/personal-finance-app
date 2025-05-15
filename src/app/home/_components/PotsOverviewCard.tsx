import Image from "next/image";

import TinyPot from "@/components/Layout/TinyPot";
import OverviewCardDetailed from "@/app/home/_components/OverviewCardDetailed";
import totalSavedIcon from "../../../../public/assets/images/icon-pot.svg";

import data from "../../../../public/data.json";

const potsOverview = data.pots.slice(0, 4);

export default function PotsOverview({ totalSaved }: { totalSaved: number }) {
    return (
        <OverviewCardDetailed title="Pots" seeDetails>
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
                        <TinyPot key={pot.name} title={pot.name} amount={pot.total} theme={pot.theme} />
                    ))}
                </div>
            </div>
        </OverviewCardDetailed>
    );
}
