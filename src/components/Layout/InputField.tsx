"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { updateSearchParam } from "@/_lib/helpers";
import { InputFieldProps } from "@/_lib/types";
import { useRef } from "react";
import Image from "next/image";

import caretDown from "../../../public/assets/images/icon-caret-down.svg";
import searchIcon from "../../../public/assets/images/icon-search.svg";

export default function InputField({
    placeholderText,
    icon,
    prefix,
    colorTag,
    helperText,
    isDisabled,
    onClick,
}: InputFieldProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    function handleInputChange(value: string) {
        const newParams = updateSearchParam(searchParams, "search", value);
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            router.push(`?${newParams.toString()}`, { scroll: false });
        }, 300);
    }
    return (
        <div className="flex flex-col gap-[4px] mr-[24px]">
            <div className="flex flex-col relative">
                <input
                    disabled={isDisabled}
                    type="text"
                    onChange={(e) => {
                        handleInputChange(e.target.value);
                    }}
                    className={
                        (icon ? `pe-[var(--spacing-xxl)] ` : `pe-[var(--spacing-md)] `) +
                        (colorTag || prefix ? `ps-[48px] ` : `ps-[var(--spacing-md)] `) +
                        ` w-full max-w-[320px] py-[var(--spacing-xs)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] hover:cursor-pointer hover:border-[var(--grey-900)] placeholder:text-[var(--beige-500)] placeholder:text-[length:var(--font-size-sm)] focus:border-[var(--grey-900)] focus:outline-none`
                    }
                    placeholder={placeholderText}
                />
                {prefix && (
                    <div
                        className={`absolute top-[50%] left-[20px] translate-y-[-50%] rounded-full text-[var(--beige-500)]`}>
                        {prefix}
                    </div>
                )}
                {colorTag && (
                    <div
                        style={{ backgroundColor: `var(--${colorTag})` }}
                        className={`absolute w-[16px] h-[16px] top-[50%] left-[20px] translate-y-[-50%] rounded-full`}></div>
                )}
                {icon && (
                    <Image
                        onClick={onClick}
                        src={icon === "search" ? searchIcon : caretDown}
                        width={16}
                        height={16}
                        alt=""
                        className="absolute right-[8px] top-[50%] translate-[-50%] cursor-pointer"
                    />
                )}
            </div>
            {helperText && (
                <span className="text-[var(--beige-500)] text-[length:var(--font-size-xs)] text-right">
                    {helperText}
                </span>
            )}
        </div>
    );
}
