import { RecurringBillsProps } from "@/_lib/types";
import { formatCurrency } from "@/_lib/helpers";

import Image from "next/image";

export default function BillItem({ date, name, avatar, amount }: RecurringBillsProps) {
    let dateSuffix = "";
    if (date === 1) {
        dateSuffix = "st";
    }
    if (date === 2) {
        dateSuffix = "nd";
    }
    if (date == 3) {
        dateSuffix = "rd";
    }
    if (date > 3) {
        dateSuffix = "th";
    }

    // console.log(date, name, avatar, amount);
    return (
        <div className="flex flex-col not-first:border-t-[1px] last:pt-[var(--spacing-md)] [&:not(:first-child):not(:last-child)]:py-[var(--spacing-md)] first:pb-[var(--spacing-md)] not-first:border-[var(--grey-500)]/15">
            <div className="flex flex-col md:flex-row">
                <div className="flex items-center gap-[var(--spacing-sm)] md:flex-1 mb-[var(--spacing-xxs)]">
                    <Image src={avatar} width={32} height={32} alt={name} className="rounded-full" />
                    <span className="text-[length:var(--font-size-sm)] font-bold">{name}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[length:var(--font-size-xs)] text-[var(--green)]">
                        Monthly - {date}
                        {dateSuffix}
                    </span>
                    <span className="text-[length:var(--font-size-sm)] font-bold">{formatCurrency(amount)}</span>
                </div>
            </div>
        </div>
    );
}
