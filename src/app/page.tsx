"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        } else {
            router.push("/home");
        }
    }, [isLoggedIn, router]);

    return <h1>Loading...</h1>;
}
