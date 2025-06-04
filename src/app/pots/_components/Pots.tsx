import { PotsProps } from "@/_lib/types";
import { getAllPots } from "@/_lib/data-services";

import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import PotsCard from "./PotsCard";
import PotsHeader from "./PotsHeader";

export default async function Pots() {
    const pots: PotsProps = await getAllPots();

    return (
        <FullPageWrapper>
            <PotsHeader />
            <section id="pots" className="grid md:grid-cols-2 gap-[var(--spacing-lg)]">
                {pots.data.map((pot) => (
                    <PotsCard
                        key={pot.name}
                        name={pot.name}
                        target={pot.target}
                        totalSaved={pot.total}
                        theme={pot.theme}
                    />
                ))}
            </section>
        </FullPageWrapper>
    );
}
