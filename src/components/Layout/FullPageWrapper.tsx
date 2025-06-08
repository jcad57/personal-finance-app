export default function FullPageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-dvh overflow-y-auto px-[var(--spacing-sm)] py-[var(--spacing-lg)] pb-[89px] md:px-[40px] md:pt-[32px] md:pb-[123px] lg:py-[32px] w-full">
            {children}
        </main>
    );
}
