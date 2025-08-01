import { useFormContext } from "react-hook-form";

interface FormValues {
    name: string;
    email: string;
    password: string;
}

export default function Login({
    handleFormChange,
    handleSignIn,
    authError,
}: {
    handleFormChange: (formType: string) => void;
    handleSignIn: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    authError: string;
}) {
    const { register } = useFormContext<FormValues>();

    return (
        <>
            <form className="flex flex-col" onSubmit={(e) => handleSignIn(e)}>
                <h1 className="text-[length:var(--font-size-xl)] font-bold leading-[120%]">Login</h1>
                <div className="mt-[var(--spacing-xl)]">
                    {authError && (
                        <div>
                            <span className="text-[var(--red)] text-[length:var(--font-size-sm)]">{authError}</span>
                        </div>
                    )}
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
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        {...register("password")}
                        className="w-full border-[1px] border-[var(--grey-900)] rounded-lg p-2 mt-1"
                    />
                    <button
                        type="submit"
                        className="bg-[var(--grey-900)] font-bold text-[var(--white)] text-[length:var(--font-size-sm)] rounded-lg px-4 py-[var(--spacing-sm)] w-full my-[var(--spacing-xl)]">
                        Login
                    </button>
                    <p className="text-xs text-[var(--grey-500)] text-center">
                        Need to create an account?{" "}
                        <a
                            className="underline font-bold text-[var(--grey-900)]"
                            onClick={() => handleFormChange("sign-up")}>
                            Sign Up
                        </a>
                    </p>
                </div>
            </form>
            <div className="mt-4">
                <p className="text-center font-bold text-[length:var(--font-size-sm)] text-[var(--red)]">FOR DEMO:</p>
                <p className="text-center font-bold text-[length:var(--font-size-sm)] text-[var(--red)]">
                    email: demo@personal-finance.com
                </p>
                <p className="text-center font-bold text-[length:var(--font-size-sm)] text-[var(--red)]">
                    password: demouser
                </p>
            </div>
        </>
    );
}
