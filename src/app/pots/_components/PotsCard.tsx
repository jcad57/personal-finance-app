"use client";
import { formatCurrency } from "@/_lib/helpers";

import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
import PotsProgressBar from "./PotsProgressBar";
import Button from "@/components/Layout/Button";

export default function PotsCard({
    name,
    target,
    totalSaved,
    theme,
}: {
    name: string;
    target: number;
    totalSaved: number;
    theme: string;
}) {
    return (
        <PrimaryCard title={name} linkTo="pots" accentDot accentDotTheme={theme} ellipsis altText="Pots">
            <div>
                <div className="flex justify-between items-center pb-[var(--spacing-sm)]">
                    <span className="text-[var(--grey-500)] text-[length:var(--font-size-sm)]">Total Saved</span>
                    <span className="text-[length:var(--font-size-xl)] font-bold">{formatCurrency(totalSaved)}</span>
                </div>
                <PotsProgressBar saved={totalSaved} target={target} theme={theme} />
                <div className="flex justify-between items-center pt-[var(--spacing-sm)]">
                    <span className="text-[var(--grey-500)] text-[length:var(--font-size-xs)] font-bold">
                        {((totalSaved / target) * 100).toFixed(2)}%
                    </span>
                    <span className="text-[var(--grey-500)] text-[length:var(--font-size-xs)]">
                        Target of {formatCurrency(target).split(".")[0]}
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center gap-[var(--spacing-md)] pt-[var(--spacing-xl)]">
                <Button buttonText="Add Money" onClick={() => console.log("clicked")} icon="+" />
                <Button buttonText="Withdraw" onClick={() => console.log("clicked")} />
            </div>
        </PrimaryCard>
    );
}
