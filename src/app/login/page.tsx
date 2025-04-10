"use client";

import Image from "next/image";
import logo from "../../../public/assets/images/logo-large.svg";
import authImg from "../../../public/assets/images/illustration-authentication.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";

import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

export default function Login() {
    const [formType, setFormType] = useState("login");
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        // TODO: Add password visible icon
        <>
            <header className="flex justify-center items-center bg-[var(--grey-900)] py-[var(--spacing-lg)] rounded-b-lg md:hidden">
                <Image src={logo} width={150} height={80} alt="logo" />
            </header>
            <header className="hidden md:block md:p-[var(--spacing-md)] md:w-[600px]">
                <div
                    style={{
                        backgroundImage: `url(../../../public/assets/images/illustration-authentication.svg)`,
                    }}></div>
            </header>
            <main className="flex flex-col justify-center items-center bg-[var(--beige-300)] px-[var(--spacing-md)] h-full md:mx-auto">
                <div className="flex flex-col w-full bg-[var(--white)] px-[var(--spacing-md)] py-[var(--spacing-lg)] rounded-xl max-w-[562px]">
                    {formType === "login" && <LoginForm setFormType={setFormType} register={register} />}
                    {formType === "sign-up" && <SignupForm setFormType={setFormType} register={register} />}
                </div>
            </main>
        </>
    );
}
