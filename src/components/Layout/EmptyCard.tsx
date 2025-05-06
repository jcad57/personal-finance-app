const EmptyCard = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="grid bg-[var(--card-bg)] px-[var(--spacing-md)] py-[var(--spacing-lg)] lg:px-[var40px] lg:py-[var(--spacing-xl)] rounded-[var(--card-border-radius)] gap-[var(--spacing-lg)]">
            {children}
        </div>
    );
};

export default EmptyCard;
