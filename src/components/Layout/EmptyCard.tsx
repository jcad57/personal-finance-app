const EmptyCard = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="grid bg-[var(--card-bg)] px-[var(--spacing-md)] py-[var(--spacing-lg)] lg:px-[var(--card-padding-xl)] lg:py-[var(--card-padding-xl)] rounded-[var(--card-border-radius)] gap-[var(--spacing-lg)]">
            {children}
        </div>
    );
};

export default EmptyCard;
