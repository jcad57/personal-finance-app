"use client";
import Button from "./Button";
import Image from "next/image";

export default function PageHeader({
    title,
    showButton,
    headerButton,
    buttonText,
    onClick,
}: {
    title: string;
    showButton?: boolean;
    headerButton?: boolean;
    buttonText?: string;
    onClick?: () => void;
}) {
    return (
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr"}}>
            <h1 className="text-[length:var(--font-size-xl)] font-bold mb-[var(--spacing-xl)]">{title}</h1>
            <div className="flex justify-self-end gap-[8px]">
            {showButton && (
                <Button
                    headerButton={headerButton}
                    buttonText={buttonText || "+ Add"}
                    primary={true}
                    onClick={onClick ? onClick : () => console.log("Button Has No Action")}
                />
            )}
                <Button isLogout />
            </div>
        </div>
    );
}
