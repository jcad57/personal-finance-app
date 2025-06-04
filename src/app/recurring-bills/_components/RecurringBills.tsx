import { RecurringBillsProps } from "@/_lib/types";
import { getRecurringBills } from "@/_lib/data-services";
import { getDueSoonBills, getPaidBills, getUpcomingBills } from "@/_lib/helpers";

import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import SecondaryCard from "@/components/Layout/Cards/SecondaryCard";
import FullPageWrapper from "@/components/Layout/FullPageWrapper";
import PageHeader from "@/components/Layout/PageHeader";
import Summary from "./Summary";
import RecurringBillsWrapper from "./RecuringBillsWrapper";

export default async function RecurringBills() {
    const data: RecurringBillsProps[] = await getRecurringBills();
    const paidBills = getPaidBills(data);
    const totalUpcomingBills = getUpcomingBills(data);
    const dueSoonBills = getDueSoonBills(data);

    return (
        <FullPageWrapper>
            <PageHeader title="Recurring Bills" />
            <section id="Recurring Bills">
                <div className="grid lg:grid-cols-3 gap-[var(--spacing-lg)]">
                    <div className="flex flex-col gap-[var(--spacing-xs)] md:grid md:grid-cols-2 md:flex-row md:gap-[var(--spacing-lg)] lg:flex lg:flex-col">
                        <SecondaryCard title="Total bills" accent value={384.98} />
                        <PrimaryCard title="Summary">
                            <Summary
                                paidBills={paidBills}
                                totalUpcomingBills={totalUpcomingBills}
                                dueSoonBills={dueSoonBills}
                            />
                        </PrimaryCard>
                    </div>
                    <RecurringBillsWrapper recurringBills={data} />
                </div>
            </section>
        </FullPageWrapper>
    );
}
