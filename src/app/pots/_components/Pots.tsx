import { PotsProps } from "@/_lib/types";
import { getAllPots } from "@/_lib/data-services";

import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import PageHeader from "@/components/Layout/PageHeader";
import PotsCard from "./PotsCard";

export default async function Pots() {
    const pots: PotsProps = await getAllPots();

    return (
        <FullPageWrapper>
            <PageHeader title="Pots" showButton buttonText="+ Add New Pot" headerButton />
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
