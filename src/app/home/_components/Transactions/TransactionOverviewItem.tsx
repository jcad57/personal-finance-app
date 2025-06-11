import Image from "next/image";
import { formatCurrency, formatDate } from "@/_lib/helpers";
import { TransactionOverviewItemProps } from "@/_lib/types";
export default function TransactionOverviewItem({ avatar, name, date, amount }: TransactionOverviewItemProps) {
    return (
        <div className="flex justify-between [&:not(:first-child)]:border-t-[1px] [&:not(:last-child)&:not(:first-child)]:py-[var(--spacing-md)] [&:last-child]:pt-[var(--spacing-md)] [&:first-child]:pb-[var(--spacing-md)] border-[var(--grey-100)]">
            <div className="flex gap-[var(--spacing-sm)] items-center">
                <Image src={avatar} width={32} height={32} alt="avatar" className="rounded-full" aria-hidden={true} />
                {name}
            </div>
            <div className={`flex flex-col items-center gap-[var(--spacing-xxs)]`}>
                <p className={`font-bold ${amount > 0 ? "text-[var(--green)]" : "text-[var(--grey-900)]"}`}>
                    {amount > 0 && `+`}

                    {formatCurrency(amount)}
                </p>
                <p className="text-[length:var(--font-size-xs)] text-[var(--grey-500)]">{formatDate(date)}</p>
            </div>
        </div>
    );
}
