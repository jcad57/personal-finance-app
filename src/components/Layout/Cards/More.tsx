import Image from "next/image";
import iconCaretRight from "../../../../public/assets/images/icon-caret-right.svg";
import Link from "next/link";

export const More = ({ moreText, altText, path }: { moreText?: string; altText?: string; path?: string }) => {
    return (
        <Link
            className="flex items-center gap-[var(--spacing-xs)] cursor-pointer"
            href={{ pathname: "/transactions", query: { filter: path?.split(" ").join("_").toLocaleLowerCase() } }}>
            <span className="text-[var(--grey-500)] text-[length:var(--font-size-sm)]">{moreText || "More"}</span>
            <Image src={iconCaretRight} alt={altText || ""} />
        </Link>
    );
};
