export default function Button({
    icon,
    buttonText,
    primary,
    headerButton,
    onClick,
}: {
    icon?: string;
    buttonText: string;
    primary?: boolean;
    headerButton?: boolean;
    onClick?: () => void;
}) {
    return (
        <button
            className="flex justify-center items-center bg-[var(--beige-300)] py-[var(--spacing-sm)] px-[28px] rounded-[var(--spacing-xxs)] ml-auto max-h-[53px]"
            style={{
                backgroundColor: primary ? "black" : "var(--beige-100)",
                maxWidth: headerButton ? "180px" : "auto",
                width: headerButton ? "auto" : "100%",
            }}
            onClick={onClick}>
            <span className="font-bold text-[length:var(--spacing-s)]" style={{ color: primary ? "white" : "black" }}>
                {icon} {"\n"}
                {buttonText}
            </span>
        </button>
    );
}
