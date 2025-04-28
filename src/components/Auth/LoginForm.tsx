export default function Login({ setFormType, register }) {
    return (
        <>
            <form className="flex flex-col">
                <h1 className="text-[length:var(--font-size-xl)] font-bold leading-[120%]">Login</h1>
                <div className="mt-[var(--spacing-xl)]">
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
                            onClick={() => setFormType("sign-up")}>
                            Sign Up
                        </a>
                    </p>
                </div>
            </form>
        </>
    );
}
