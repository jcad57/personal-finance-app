export default function FullPageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className="px-[var(--spacing-sm)] py-[var(--spacing-lg)] md:px-[40px] md:py-[var(--spacing-xl)]  w-full">
            {children}
        </main>
    );
}
