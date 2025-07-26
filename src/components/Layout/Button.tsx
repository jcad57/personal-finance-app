"use client";
import { useUserAuth } from "@/context/UserAuthContext";
import { useRouter } from "next/navigation";

import logoutBtn from "../../../public/assets/images/logout-btn.png";
import Image from "next/image";

export default function Button({
    icon,
    buttonText,
    primary,
    isDelete,
    headerButton,
    onClick,
    isLogout,
}: {
    icon?: string;
    buttonText?: string;
    primary?: boolean;
    isDelete?: boolean;
    headerButton?: boolean;
    onClick?: () => void;
    isLogout?: boolean;
}) {
    const { signOut } = useUserAuth();
    const router = useRouter();

    function handleSignOut() {
        signOut();
        router.push("/login");
    }

    if (isLogout) {
        return (
            <div className="bg-[var(--red)] rounded-[var(--spacing-xxs)] content-center">
                <button
                    className="flex justify-center items-center md:py-[var(--spacing-sm)] md:px-[28px] rounded-[var(--spacing-xxs)] ml-auto max-h-[53px] w-[53px] md:w-auto gap-[8px] hover:bg-[#c46767] transition-all duration-150 ease-in-out"
                    onClick={() => handleSignOut()}>
                    <Image
                        src={logoutBtn}
                        alt="Log Out"
                        width={24}
                        height={24}
                        objectFit="contain"
                        className="self-center justify-self-center"
                    />
                    <span className="hidden md:block font-bold text-[length:var(--spacing-s)] text-[white]">
                        Logout
                    </span>
                </button>
            </div>
        );
    } else {
        return (
            <button
                className={`
                ${primary && "bg-[var(--grey-900)] hover:bg-[var(--beige-500)] "} 
                ${headerButton ? "max-w-[180px] w-auto" : "w-full "}
                ${isDelete && "bg-[var(--red)] "}
                ${
                    !primary &&
                    !isDelete &&
                    "bg-[var(--beige-300)] hover:bg-white hover:outline-[1px] hover:outline-[var(--beige-500)]"
                }
                flex justify-center items-center py-[var(--spacing-sm)] px-[28px] rounded-[var(--spacing-xxs)] ml-auto max-h-[53px] transition-all duration-150 ease-in-outs`}
                style={{
                    // backgroundColor: primary ? "black" : isDelete ? "var(--red)" : "var(--beige-100)",
                    // maxWidth: headerButton ? "180px" : "auto",
                    width: headerButton ? "auto" : "100%",
                }}
                onClick={onClick}>
                <span
                    className="font-bold text-[length:var(--spacing-s)]"
                    style={{ color: primary || isDelete ? "white" : "black" }}>
                    {icon} {"\n"}
                    {buttonText}
                </span>
            </button>
        );
    }
}
