import { PotsProps } from "@/_lib/types";

import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import PageHeader from "@/components/Layout/PageHeader";
import PotsCard from "./PotsCard";

export default function Pots({ pots }: { pots: PotsProps }) {
    const allPots = pots.data;
    return (
        <FullPageWrapper>
            <PageHeader title="Pots" showButton buttonText="+ Add New Pot" headerButton />
            <section id="pots" className="grid md:grid-cols-2 gap-[var(--spacing-lg)]">
                {allPots.map((pot) => (
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
