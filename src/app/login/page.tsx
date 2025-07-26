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


const authImg = "/assets/images/illustration-authentication.svg";
export default function Login() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [formType, setFormType] = useState("login");
    const methods = useForm();
    const {getValues} = methods;
    const {signIn} = useUserAuth();
    const router = useRouter();

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        const { email, password } = getValues();
        const user = await signIn(email, password);
        if (user) {
            router.push("/home");
        } 
        setIsLoading(false)
    }

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
                            Personal finance app puts you in control of your spending. Track transactions, set budgets,
                            and add to savings pots easily.
                        </p>
                    </div>
                </div>
            </header>
            <main className="flex flex-col justify-center items-center bg-[var(--beige-300)] px-[var(--spacing-lg)] h-full lg:mx-auto">
                {
                    isLoading ? <Loading /> :
                    <div className="flex flex-col w-full bg-[var(--white)] px-[var(--spacing-md)] py-[var(--spacing-lg)] rounded-xl max-w-[562px]">
                
                    {formType === "login" && <LoginForm setFormType={setFormType} handleSignIn={handleSignIn}/>}
                    {formType === "sign-up" && <SignupForm setFormType={setFormType}  />}
                    </div>
                }
            </main>
        </div>
        </FormProvider>
    );
}
