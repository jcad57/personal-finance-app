import { formatCurrency } from "@/_lib/helpers";
import VerticalAccent from "@/components/Layout/VerticalAccent";

export default function TinyPot({ title, amount, theme }: { title?: string; amount: number; theme?: string }) {
    return (
        <div className="flex">
            <VerticalAccent theme={theme} />
            <div className="flex flex-col gap-[4px] ml-[16px]">
                <h5 className="text-[length:var(--font-size-xs)] text-[var(--grey-500)]">{title}</h5>
                <span className="text-[length:var(--font-size-sm)] text-[var(--grey-900)] font-bold">
                    {formatCurrency(amount)}
                </span>
            </div>
        </div>
    );
}
