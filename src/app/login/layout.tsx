export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-[var(--beige-300)] flex flex-col h-screen lg:flex lg:flex-row lg:p-[var(--spacing-lg)]">
            {children}
        </div>
    );
}
