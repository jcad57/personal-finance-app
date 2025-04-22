import Image from "next/image";
import iconCaretRight from "../../../public/assets/images/icon-caret-right.svg";

export default function OverviewCard({
    title,
    seeDetails,
    viewAll,
    children,
}: {
    title: string;
    children: React.ReactNode;
    seeDetails?: boolean;
    viewAll?: boolean;
    limit?: number;
}) {
    return (
        <div className="grid bg-[var(--card-bg)] p-[var(--card-padding)] lg:p-[var(--card-padding-lg)] rounded-[var(--card-border-radius)] gap-[var(--spacing-md)]">
            <div className="flex justify-between">
                <h2 className="text-[length:var(--font-size-lg)] font-bold">{title}</h2>

                <div className="flex gap-[var(--spacing-xs)] items-center">
                    <span className="text-[var(--grey-500)] text-[length:var(--font-size-sm)]">
                        {seeDetails && "See Details"}
                        {viewAll && "View All"}
                    </span>
                    <Image src={iconCaretRight} alt="" />
                </div>
            </div>
            {children}
        </div>
    );
}
