import Link from "next/link";

const SignUpSuccess = () => {
    return (
        <section className="grid place-items-center w-full h-screen">
            <div className="grid text-center gap-[32px]">
                <span className="text-6xl ">🎉</span>
                <div>
                    <h2 className="font-extrabold">SUCCESSFULLY SIGNED UP!</h2>
                    <p className="my-2">
                        We sent a confirmation to your email. <br />
                        Confirm your email then log in to view your dashboard.
                    </p>
                    <div className="my-2">
                        Click{" "}
                        <Link href="/login" className="text-[var(--red)]">
                            here
                        </Link>{" "}
                        to log in
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpSuccess;
