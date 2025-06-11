import { formatCurrency } from "@/_lib/helpers";
import VerticalAccent from "@/components/Layout/VerticalAccent";

export default function TinyPot({ title, amount, theme }: { title?: string; amount: number; theme?: string }) {
    return (
        <div className="flex">
            <VerticalAccent theme={theme} />
            <div className="flex flex-col gap-[4px] ml-[16px]">
                <h4 className="text-[length:var(--font-size-xs)] text-[var(--grey-500)]">{title}</h4>
                <span
                    className={
                        (amount >= 0 ? `text-[var(--grey-900)] ` : `text-[var(--red)] `) +
                        ` text-[length:var(--font-size-sm)] font-bold`
                    }>
                    {amount >= 0 ? formatCurrency(amount) : formatCurrency(0)}
                </span>
            </div>
        </div>
    );
}
