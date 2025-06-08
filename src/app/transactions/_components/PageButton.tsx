const PageButton = ({
    pageNumber,
    currentPage,
    onClick,
}: {
    pageNumber: number;
    currentPage: number;
    onClick: (pageNumber: number) => void;
}) => {

    return (
        <button
            className={
                (pageNumber === currentPage
                    ? `bg-[black] outline-[black] text-[white]`
                    : `text-[var(--grey-900)] outline-[var(--beige-500)]`) +
                ` outline-1 text-[length:var(--font-size-sm)] rounded-[8px] w-[40px] h-[40px]`
            }
            onClick={() => onClick(pageNumber)}>
            {pageNumber}
        </button>
    );
};

export default PageButton;
