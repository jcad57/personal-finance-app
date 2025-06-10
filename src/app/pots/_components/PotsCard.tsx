"use client";
import { formatCurrency } from "@/_lib/helpers";
import { useModal } from "@/context/ModalContext";

import PotsProgressBar from "./PotsProgressBar";
import PrimaryCard from "@/components/Layout/Cards/PrimaryCard";
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
    const { openModal } = useModal();

    return (
        <PrimaryCard
            title={name}
            linkTo="pots"
            accentDot
            accentDotTheme={theme}
            ellipsis
            altText="Pots"
            editLabel="Edit Pot"
            deleteLabel="Delete Pot"
            onEditClick={(e) => {
                e.stopPropagation();
                openModal("edit-pot", { pot: name });
            }}
            onDeleteClick={(e) => {
                e.stopPropagation();
                openModal("delete-pot", { name: name, type: "pot" });
            }}>
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
                <Button
                    buttonText="Add Money"
                    onClick={() =>
                        openModal("edit-savings", {
                            potName: name,
                            modalType: "add",
                            theme: theme,
                            totalSaved: totalSaved,
                            target: target,
                        })
                    }
                    icon="+"
                />
                <Button
                    buttonText="Withdraw"
                    onClick={() =>
                        openModal("edit-savings", {
                            potName: name,
                            modalType: "withdraw",
                            theme: theme,
                            totalSaved: totalSaved,
                            target: target,
                        })
                    }
                />
            </div>
        </PrimaryCard>
    );
}
