import Navigation from "@/components/Navbar/Navigation";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="lg:h-screen lg:flex lg:flex-row-reverse bg-[var(--beige-300)]">
            {children} <Navigation />
        </div>
    );
}
