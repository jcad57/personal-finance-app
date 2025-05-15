import Image from "next/image";
import iconCaretRight from "../../../../public/assets/images/icon-caret-right.svg";

export const More = ({ moreText, altText }: { moreText?: string; altText?: string }) => {
    return (
        <div className="flex items-center gap-[var(--spacing-xs)] cursor-pointer">
            <span className="text-[var(--grey-500)] text-[length:var(--font-size-sm)]">{moreText || "More"}</span>
            <Image src={iconCaretRight} alt={altText || ""} />
        </div>
    );
};
