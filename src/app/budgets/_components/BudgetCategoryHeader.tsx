import ellipsisIcon from "../../../../public/assets/images/icon-ellipsis.svg";
import Image from "next/image";

export default function BudgetCategoryHeader({ category, theme }: { category: string; theme: string }) {
    return (
        <div className="flex justify-between">
            <div className="flex items-center">
                <div
                    className="w-[16px] h-[16px] aspect-square rounded-full"
                    style={{ backgroundColor: `${theme}` }}></div>
                <h3 className="pl-[var(--spacing-sm)] text-[var(--grey-900)] text-[length:var(--font-size-lg)] font-bold">
                    {category}
                </h3>
            </div>
            <Image src={ellipsisIcon} width={16} height={16} alt="Budget Category Options" />
        </div>
    );
}
