"use client";
import { useRouter } from "next/navigation";
import { PrimaryCardProps } from "@/_lib/types";
import { More } from "./More";

import DropDown from "../DropDown";

export default function CardHeader({
    title,
    linkTo,
    more,
    moreText,
    accentDot,
    accentDotTheme,
    ellipsis,
    editLabel,
    deleteLabel,
    onEditClick,
    onDeleteClick,
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
            </div>
            {ellipsis && (
                <DropDown
                    editLabel={editLabel}
                    deleteLabel={deleteLabel}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
                />
            )}
        </div>
    );
}

const AccentDot = ({ theme }: { theme: string }) => {
    return <div className="w-[16px] h-[16px] aspect-square rounded-full" style={{ backgroundColor: `${theme}` }}></div>;
};
