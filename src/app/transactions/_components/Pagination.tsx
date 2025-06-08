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
    let paginationButtons = [];

    function updatePage(pageNumber: number | string) {
        const newParams = updateSearchParam(searchParams, "page", pageNumber);
        router.push(`?${newParams.toString()}`, { scroll: false });
    }

    if (totalPages > 4) {
        paginationButtons = [1, 2, "...", totalPages];
        console.log("Total Pages:", paginationButtons);
    }

    return (
        <div className="flex justify-center gap-[var(--spacing-xxs)] pt-[var(--spacing-lg)]">
            <button className="outline-1 outline-[var(--beige-500)] rounded-[8px] w-[40px] h-[40px]">
                <Image src={prevIcon} width={6} height={11} alt="Previous Page" className="mx-auto" />
            </button>
            {/* {paginationButtons &&
                paginationButtons.map((button, index) => {
                    return (
                        <PageButton key={index} pageNumber={button} onClick={updatePage} currentPage={currentPage} />
                    );
                })} */}
            {Array.from({ length: Math.ceil(totalPages) }, (_, index) => (
                <PageButton key={index} pageNumber={index + 1} onClick={updatePage} currentPage={currentPage} />
            ))}
            <button className="outline-1 outline-[var(--beige-500)] rounded-[8px] w-[40px] h-[40px]">
                <Image src={nextIcon} width={6} height={11} alt="Previous Page" className="mx-auto" />
            </button>
        </div>
    );
};

export default Pagination;
