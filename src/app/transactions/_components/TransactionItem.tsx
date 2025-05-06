import Image from "next/image";
import { formatCurrency, formatDate } from "@/_lib/helpers";
import { TransactionItemProps } from "@/_lib/types";
export default function TransactionItem({ date, avatar, name, amount, category }: TransactionItemProps) {
    return (
        <div className="flex justify-between [&:not(:first-child)]:border-t-[1px] [&:not(:last-child)&:not(:first-child)]:py-[var(--spacing-md)] [&:last-child]:pt-[var(--spacing-md)] [&:first-child]:pb-[var(--spacing-md)] border-[var(--grey-100)]">
            <div className="flex gap-[var(--spacing-xs)] items-center ">
                <Image src={avatar} width={36} height={36} alt="avatar" className="rounded-full" />
                <div className="flex flex-col gap-[var(--spacing-xxxs)]">
                    <p className="font-bold">{name}</p>
                    <p className="text-[var(--grey-500)] text-[length:var(--font-size-xs)]">{category}</p>
                </div>
            </div>
            <div className={`flex flex-col text-right gap-[var(--spacing-xxxs)]`}>
                <p className={`font-bold ${amount > 0 ? "text-[var(--green)]" : "text-[var(--grey-900)]"}`}>
                    {amount > 0 && `+`}

                    {formatCurrency(amount)}
                </p>
                <p className="text-[length:var(--font-size-xs)] text-[var(--grey-500)]">{formatDate(date)}</p>
            </div>
        </div>
    );
}
