"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import iconCaretRight from "../../../public/assets/images/icon-caret-right.svg";

export default function CardHeader({ title, seeAll }: { title: string; seeAll?: boolean }) {
    const router = useRouter();
    return (
        <div className="flex justify-between align-center">
            <h1 className="text-[var(--color-grey-9)] text-[length:var(--font-size-md)] font-bold">{title}</h1>
            <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                    router.push(`/${title.toLowerCase()}`);
                }}>
                {seeAll && (
                    <>
                        <span className="text-[var(--grey-500)] text-[length:var(--font-size-sm)] mr-[var(--spacing-xs)]">
                            See All
                        </span>
                        <Image src={iconCaretRight} alt="" />
                    </>
                )}
            </div>
        </div>
    );
}
