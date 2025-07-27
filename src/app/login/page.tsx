"use client";

import Image from "next/image";
import logo from "../../../public/assets/images/logo-large.svg";

import { FormProvider, useForm } from "react-hook-form";
import { useUserAuth } from "@/context/UserAuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

import SignupForm from "@/components/Auth/SignupForm";
import LoginForm from "@/components/Auth/LoginForm";
import Loading from "@/components/Layout/Loading";

interface FormValues {
    email: string;
    name: string;
    password: string;
}

const authImg = "/assets/images/illustration-authentication.svg";
export default function Login() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formType, setFormType] = useState("login");
    const [authError, setAuthError] = useState("");
    const methods = useForm<FormValues>();
    const { getValues, resetField } = methods;
    const { signIn, signUp, error } = useUserAuth();

    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const { name, email, password } = getValues();
        const data = await signUp(name, email, password);

        if (error) {
            console.error(error);
            setAuthError(error);
        }

        if (data.user) {
            router.push("/login/success");
        }
        setIsLoading(false);
    };

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const { email, password } = getValues();
        const { data } = await signIn(email, password);
        if (error) {
            console.error(error);
            setAuthError(error);
        }
        if (data.user !== null) {
            router.push("/");
        }
        setIsLoading(false);
    };

    const handleFormChange = (formName: string) => {
        resetField("email");
        resetField("password");
        if (formName === "login") {
            setAuthError("");
            setFormType("login");
        }

        if (formName === "sign-up") {
            setAuthError("");
            setFormType("sign-up");
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="bg-[var(--beige-300)] flex flex-col h-screen lg:flex lg:flex-row lg:p-[var(--spacing-lg)] w-full">
                <header className="flex justify-center items-center bg-[var(--grey-900)] py-[var(--spacing-lg)] rounded-b-lg lg:hidden">
                    <Image src={logo} width={150} height={80} alt="logo" />
                </header>
                <header
                    className="hidden lg:block lg:p-10 lg:w-[600px] lg:h-full bg-cover lg:rounded-xl"
                    style={{ backgroundImage: `url('${authImg}')` }}>
                    <div className="flex flex-col justify-between h-full text-[var(--white)]">
                        <Image src={logo} width={121} height={21} alt="logo" />
                        <div className="flex flex-col gap-[var(--spacing-lg)] w-[82%]">
                            <p className="text-[length:var(--font-size-xl)] leading-[length:var(--font-size-xl)] font-bold">
                                Keep track of your money and save for your future
                            </p>
                            <p className="text-[length:var(--font-size-xs)] leading-[length:var(--font-size-s)] font-normal">
                                Personal finance app puts you in control of your spending. Track transactions, set
                                budgets, and add to savings pots easily.
                            </p>
                        </div>
                    </div>
                </header>
                <main className="flex flex-col justify-center items-center bg-[var(--beige-300)] px-[var(--spacing-lg)] h-full lg:mx-auto">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <div className="flex flex-col w-full bg-[var(--white)] px-[var(--spacing-md)] py-[var(--spacing-lg)] rounded-xl max-w-[562px]">
                            {formType === "login" && (
                                <LoginForm
                                    handleFormChange={handleFormChange}
                                    handleSignIn={handleSignIn}
                                    authError={authError}
                                />
                            )}
                            {formType === "sign-up" && (
                                <SignupForm
                                    handleFormChange={handleFormChange}
                                    handleSignUp={handleSignUp}
                                    authError={authError}
                                />
                            )}
                        </div>
                    )}
                </main>
            </div>
        </FormProvider>
    );
}
