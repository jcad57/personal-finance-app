import { UseFormRegister } from "react-hook-form";

interface FormValues {
    email: string;
    name: string;
    password: string;
}
export default function SignupForm({
    setFormType,
    register,
}: {
    setFormType: (formType: string) => void;
    register: UseFormRegister<FormValues>;
}) {
    return (
        <>
            <form className="flex flex-col">
                <h1 className="text-[length:var(--font-size-xl)] font-bold leading-[120%]">Sign Up</h1>
                <div className="mt-[var(--spacing-xl)]">
                    <label
                        htmlFor="name"
                        className="text-[length:var(--font-size-xs)] font-bold text-[var(--grey-500)] ">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="w-full border-[1px] border-[var(--grey-900)] rounded-lg p-2 mb-4 mt-1"
                        {...register("name")}
                    />
                    <label
                        htmlFor="email"
                        className="text-[length:var(--font-size-xs)] font-bold text-[var(--grey-500)] ">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full border-[1px] border-[var(--grey-900)] rounded-lg p-2 mb-4 mt-1"
                        {...register("email")}
                    />
                    <label
                        htmlFor="password"
                        className="text-[length:var(--font-size-xs)] font-bold text-[var(--grey-500)]">
                        Create Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        {...register("password")}
                        className="w-full border-[1px] border-[var(--grey-900)] rounded-lg p-2 mt-1"
                    />
                    <p className="text-[length:var(--font-size-xs)] text-[var(--grey-500)] text-right leaading-[150%]">
                        Passwords must be at least 8 characters
                    </p>
                    <button
                        type="submit"
                        className="bg-[var(--grey-900)] font-bold text-[var(--white)] text-[length:var(--font-size-sm)] rounded-lg px-4 py-[var(--spacing-sm)] w-full my-[var(--spacing-xl)]">
                        Create Account
                    </button>
                    <p className="text-xs text-[var(--grey-500)] text-center">
                        Already have an account?{" "}
                        <a className="underline font-bold text-[var(--grey-900)]" onClick={() => setFormType("login")}>
                            Login
                        </a>
                    </p>
                </div>
            </form>
        </>
    );
}
