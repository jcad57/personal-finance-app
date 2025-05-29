import { RecurringBillsProps } from "@/_lib/types";
import { getRecurringBills } from "@/_lib/data-services";

import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import SecondaryCard from "@/components/Layout/Cards/SecondaryCard";
import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import PageHeader from "@/components/Layout/PageHeader";
import Summary from "./Summary";
import RecurringBillsWrapper from "./RecuringBillsWrapper";

export default async function RecurringBills() {
    const recurringBills: RecurringBillsProps[] = await getRecurringBills();

    return (
        <FullPageWrapper>
            <PageHeader title="Recurring Bills" />
            <section id="Recurring Bills">
                <div className="grid lg:grid-cols-3 gap-[var(--spacing-lg)]">
                    <div className="flex flex-col gap-[var(--spacing-xs)] md:grid md:grid-cols-2 md:flex-row md:gap-[var(--spacing-lg)] lg:flex lg:flex-col">
                        <SecondaryCard title="Total bills" accent value={384.98} />
                        <PrimaryCard title="Summary">
                            <Summary />
                        </PrimaryCard>
                    </div>
                    <RecurringBillsWrapper recurringBills={recurringBills} />
                </div>
            </section>
        </FullPageWrapper>
    );
}
