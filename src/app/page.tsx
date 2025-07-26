"use client";
import Loading from "@/components/Layout/Loading";
import { useUserAuth } from "@/context/UserAuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    const { session } = useUserAuth();

    useEffect(() => {
        if (!session) {
            router.push("/login");
        } else {
            router.push("/home");
        }
    }, [session, router]);

    return (
        <div className="grid items-center justify-center min-h-dvh w-full">
            <Loading />
        </div>
    );
}
