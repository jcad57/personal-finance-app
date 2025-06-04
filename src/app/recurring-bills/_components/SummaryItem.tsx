const SummaryItem = ({ label, value, textColor }: { label: string; value: string; textColor: string }) => {
    return (
        <>
            <span className="text-[length:var(--font-size-xs)]" style={{ color: `var(${textColor})` }}>
                {label}
            </span>
            <span className="text-[length:var(--font-size-xs)] font-bold" style={{ color: `var(${textColor})` }}>
                {value}
            </span>
        </>
    );
};

export default SummaryItem;
