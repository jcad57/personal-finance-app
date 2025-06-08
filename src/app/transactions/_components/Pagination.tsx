"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { updateSearchParam } from "@/_lib/helpers";

import PageButton from "./PageButton";
import prevIcon from "../../../../public/assets/images/icon-caret-left.svg";
import nextIcon from "../../../../public/assets/images/icon-caret-right.svg";
import Image from "next/image";

const Pagination = ({ totalItems, currentPage }: { totalItems: number; currentPage: number }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const totalPages = Math.ceil(totalItems / 10);

    function updatePage(pageNumber: number | string) {
        const newParams = updateSearchParam(searchParams, "page", pageNumber);
        router.push(`?${newParams.toString()}`, { scroll: false });
    }

    return (
        <div className="flex justify-center gap-[var(--spacing-xxs)] pt-[var(--spacing-lg)]">
            <button
                className="px-[8px]"
                disabled={currentPage <= 1}
                onClick={() => updatePage(currentPage > 1 ? currentPage - 1 : 1)}>
                <Image src={prevIcon} width={6} height={11} alt="Previous Page" className="mx-auto" />
            </button>
            {Array.from({ length: Math.ceil(totalPages) }, (_, index) => (
                <PageButton key={index} pageNumber={index + 1} onClick={updatePage} currentPage={currentPage} />
            ))}
            <button
                className="px-[8px]"
                disabled={currentPage >= totalPages}
                onClick={() => updatePage(currentPage < totalPages ? currentPage + 1 : currentPage)}>
                <Image src={nextIcon} width={6} height={11} alt="Previous Page" className="mx-auto" />
            </button>
        </div>
    );
};

export default Pagination;
