export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="bg-[var(--beige-300)] flex flex-col h-screen">{children}</div>;
}
