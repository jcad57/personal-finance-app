"use client";
import Button from "./Button";

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
        <div className="grid grid-cols-2 ">
            <h1 className="text-[length:var(--font-size-xl)] font-bold mb-[var(--spacing-xl)]">{title}</h1>
            {showButton && (
                <Button
                    headerButton={headerButton}
                    buttonText={buttonText || "+ Add"}
                    primary={true}
                    onClick={onClick ? onClick : () => console.log("Button Has No Action")}
                />
            )}
        </div>
    );
}
