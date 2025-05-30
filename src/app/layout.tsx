import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navigation from "@/components/Navbar/Navigation";

const publicSans = localFont({
    src: "../../public/assets/fonts/PublicSans-VariableFont_wght.ttf",
    variable: "--font-public-sans",
});

export const metadata: Metadata = {
    title: "Personal Finance App | Frontend Mentor",
    description: "Frontend Mentor challenge completed by Jon Deichmann. Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`h-screen font-[family-name:var(${publicSans.variable})] antialiased`}>
                <div className="h-screen lg:flex lg:flex-row-reverse bg-[var(--beige-300)]">
                    {children} <Navigation />
                </div>
            </body>
        </html>
    );
}
