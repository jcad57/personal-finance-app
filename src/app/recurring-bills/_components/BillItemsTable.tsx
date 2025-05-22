import { formatCurrency } from "@/_lib/helpers";
import { RecurringBillsProps } from "@/_lib/types";
import Image from "next/image";

const BillItemsTable = ({ recurringBills }: { recurringBills: RecurringBillsProps[] }) => {
    console.log(recurringBills);
    return (
        <table className="w-full">
            <thead className="">
                <tr className="w-full text-left text-[var(--grey-500)] text-[length:var(--font-size-xs)] border-b-[1px] border-[var(--grey-500)]/15">
                    <th className="w-[60%] pb-[var(--spacing-xs)] font-normal">Bill Title</th>
                    <th className="w-[20%] pb-[var(--spacing-xs)] font-normal">Due Date</th>
                    <th className="w-[20%] pb-[var(--spacing-xs)] font-normal text-right">Amount</th>
                </tr>
            </thead>
            <tbody>
                {recurringBills.map((bill, index) => {
                    const isLast = index === recurringBills.length - 1;

                    return (
                        <tr key={bill.id} className="not-first:border-t-[1px] not-first:border-[var(--grey-500)]/15 ">
                            <td
                                style={{
                                    paddingBlock: isLast ? "" : "var(--spacing-md)",
                                    paddingTop: isLast ? "var(--spacing-md)" : "",
                                }}
                                className="flex items-center gap-[var(--spacing-sm)]">
                                <Image
                                    src={bill.avatar}
                                    width={32}
                                    height={32}
                                    alt={bill.name}
                                    className="rounded-full"
                                />
                                <span className="text-[var(--grey-900)] text-[length:var(--font-size-sm)] font-bold">
                                    {bill.name}
                                </span>
                            </td>
                            <td className="text-[length:var(--font-size-xs)] text-[var(--green)]">
                                Monthly - {bill.date}
                            </td>
                            <td className="text-right text-[length:var(--font-size-sm)] font-bold">
                                {formatCurrency(bill.amount)}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default BillItemsTable;
