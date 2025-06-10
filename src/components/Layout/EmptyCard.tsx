const EmptyCard = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="modal grid bg-[var(--card-bg)] px-[var(--spacing-md)] py-[var(--spacing-lg)] md:px-[var(--spacing-xl)] md:py-[var(--spacing-xl)] rounded-[var(--card-border-radius)] gap-[var(--spacing-lg)]">
            {children}
        </div>
    );
};

export default EmptyCard;
