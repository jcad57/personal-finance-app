"use client";

import Image from "next/image";
import logo from "../../../public/assets/images/logo-large.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Login() {
    const [formType, setFormType] = useState("login");
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <>
            <header className="flex justify-center items-center bg-[var(--grey-900)] py-[var(--spacing-lg)] rounded-b-lg">
                <Image src={logo} width={150} height={80} alt="logo" />
            </header>
            <main className="flex flex-col justify-center items-center bg-[var(--beige-300)] h-full">
                <div id="login-form">
                    {formType === "login" && (
                        <form className="bg-[var(--white)] px-[var(--spacing-md)] py-[var(--spacing-lg)] rounded-xl mx-4 ">
                            <h1 className="text-[length:var(--font-size-xl)] font-bold leading-[120%]">Login</h1>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Username"
                                className="w-full border-[1px] border-[var(--grey-900)] rounded-lg"
                                {...register("email")}
                            />
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" placeholder="Password" {...register("password")} />
                            <button
                                type="submit"
                                className="bg-[var(--grey-900)] font-bold text-[var(--white)] text-[length:var(--font-size-sm)] rounded-lg px-4 py-[var(--spacing-sm)] mt-4 w-full">
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </>
    );
}
