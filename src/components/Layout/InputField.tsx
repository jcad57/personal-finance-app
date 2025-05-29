"use client";
import { InputFieldProps } from "@/_lib/types";
import Image from "next/image";

import caretDown from "../../../public/assets/images/icon-caret-down.svg";
import searchIcon from "../../../public/assets/images/icon-search.svg";

export default function InputField({
    placeholderText,
    icon,
    prefix,
    colorTag,
    helperText,
    maxWidth,
    isDisabled,
    onClick,
}: InputFieldProps) {
    return (
        <div className="flex flex-col gap-[4px]">
            <div className="flex flex-col relative">
                <input
                    disabled={isDisabled}
                    type="text"
                    style={{ maxWidth: maxWidth ? `${maxWidth}` : "100%" }}
                    className={
                        (icon ? `pe-[var(--spacing-xxl)] ` : `pe-[var(--spacing-md)] `) +
                        (colorTag || prefix ? `ps-[48px] ` : `ps-[var(--spacing-md)] `) +
                        ` py-[var(--spacing-xs)] rounded-[var(--spacing-xxs)] border-1 border-[var(--beige-500)] bg-[var(--white)] placeholder:text-[var(--beige-500)] placeholder:text-[length:var(--font-size-sm)] focus:border-[var(--grey-900)] focus:outline-none`
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
