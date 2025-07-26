import Link from "next/link";

const EmailConfirmed = () => {
    return (
        <section className="grid w-full h-screen place-content-center">
            <div className="grid gap-[1rem] text-center">
                <h2 className="font-extrabold">Email confirmed!</h2>
                <span>
                    <Link href="/login" className="text-[var(--red)]">
                        Login
                    </Link>
                </span>
            </div>
        </section>
    );
};

export default EmailConfirmed;
