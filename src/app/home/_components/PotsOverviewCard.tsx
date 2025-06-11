import { getAllPots } from "@/_lib/data-services";

import Image from "next/image";
import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import TinyPot from "@/components/Layout/TinyPot";
import totalSavedIcon from "../../../../public/assets/images/icon-pot.svg";

export default async function PotsOverview() {
    const pots = await getAllPots();

    return (
        <PrimaryCard title="Pots" linkTo="pots" more moreText="See Details" altText="Pots">
            <div className="grid gap-[var(--spacing-sm)] md:grid-cols-2 ">
                <div className="flex align-center p-[var(--card-padding)] gap-[var(--spacing-sm)] bg-[var(--beige-100)] rounded-[var(--card-border-radius)]">
                    <Image src={totalSavedIcon} alt="Pot Icon" width={32} height={32} aria-hidden={true} />
                    <div>
                        <h4 className="text-[var(--grey-500)] text-[length:var(--font-size-sm)] mb-[10px]">
                            Total Saved
                        </h4>
                        <span className="text-[length:var(--font-size-xl)] font-bold">${pots.totalPots}</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-[var(--spacing-sm)]">
                    {pots.data.slice(0, 4).map((pot) => (
                        <TinyPot key={pot.name} title={pot.name} amount={pot.total} theme={pot.theme} />
                    ))}
                </div>
            </div>
        </PrimaryCard>
    );
}
