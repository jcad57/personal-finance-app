"use client";
import { useRouter } from "next/navigation";
import { PrimaryCardProps } from "@/_lib/types";
import { More } from "./More";

import Image from "next/image";
import ellipsisIcon from "../../../../public/assets/images/icon-ellipsis.svg";

export default function CardHeader({
    title,
    linkTo,
    more,
    moreText,
    accentDot,
    accentDotTheme,
    ellipsis,
    altText,
}: PrimaryCardProps) {
    const router = useRouter();
    return (
        <div className="flex justify-between align-center">
            <div className="flex items-center gap-[16px]">
                {accentDot && <AccentDot theme={accentDotTheme ? accentDotTheme : ""} />}
                <h1 className="text-[var(--color-grey-9)] text-[length:var(--font-size-lg)] font-bold">{title}</h1>
            </div>
            <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                    router.push(`/${linkTo ? linkTo.toLowerCase() : `/`}`);
                }}>
                {more && <More moreText={moreText} altText={altText} />}
                {ellipsis && <Image src={ellipsisIcon} width={16} height={16} alt={altText || ""} />}
            </div>
        </div>
    );
}

const AccentDot = ({ theme }: { theme: string }) => {
    return <div className="w-[16px] h-[16px] aspect-square rounded-full" style={{ backgroundColor: `${theme}` }}></div>;
};
