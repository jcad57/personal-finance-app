import Overview from "@/app/home/_components/Overview";
import Loading from "@/components/Layout/Loading";
import { Suspense } from "react";

export default function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <Overview />
        </Suspense>
    );
}
