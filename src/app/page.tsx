"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        setIsLoggedIn(true);
        if (!isLoggedIn) {
            router.push("/login");
        } else {
            router.push("/home");
        }
    }, [isLoggedIn, router]);

    return (
        <div className="grid items-center justify-center min-h-dvh w-full">
            <h1>Loading...</h1>
        </div>
    );
}
