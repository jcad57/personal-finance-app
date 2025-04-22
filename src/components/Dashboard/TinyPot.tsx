import { formatCurrency } from "@/lib/helpers";

export default function TinyPot({ title, amount, color }: { title?: string; amount: number; color: string }) {
    return (
        <div className="flex">
            <div
                className="origin-bottom scale-y-100 transition-transform duration-500 w-[4px] rounded-[1000px]"
                style={{ backgroundColor: `${color}` }}></div>
            <div className="ml-[16px]">
                <h3 className="text-[length:var(--font-size-xs)] text-[var(--grey-500)]">{title}</h3>
                <p className="text-[length:var(--font-size-sm)] text-[var(--grey-900)] font-bold">
                    {formatCurrency(amount)}
                </p>
            </div>
        </div>
    );
}
