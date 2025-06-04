export default function Button({
    icon,
    buttonText,
    primary,
    isDelete,
    headerButton,
    onClick,
}: {
    icon?: string;
    buttonText: string;
    primary?: boolean;
    isDelete?: boolean;
    headerButton?: boolean;
    onClick?: () => void;
}) {
    return (
        <button
            className={`
                ${primary && "bg-[var(--grey-900)] hover:bg-[var(--beige-500)] "} 
                ${headerButton ? "max-w-[180px] w-auto" : "w-full "}
                ${isDelete && "bg-[var(--red)] "}
                ${
                    !primary &&
                    !isDelete &&
                    "bg-[var(--beige-300)] hover:bg-white hover:outline-[1px] hover:outline-[var(--beige-500)]"
                }
                flex justify-center items-center py-[var(--spacing-sm)] px-[28px] rounded-[var(--spacing-xxs)] ml-auto max-h-[53px] transition-all duration-150 ease-in-outs`}
            style={{
                // backgroundColor: primary ? "black" : isDelete ? "var(--red)" : "var(--beige-100)",
                // maxWidth: headerButton ? "180px" : "auto",
                width: headerButton ? "auto" : "100%",
            }}
            onClick={onClick}>
            <span
                className="font-bold text-[length:var(--spacing-s)]"
                style={{ color: primary || isDelete ? "white" : "black" }}>
                {icon} {"\n"}
                {buttonText}
            </span>
        </button>
    );
}
