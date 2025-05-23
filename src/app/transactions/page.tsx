import Transactions from "@/app/transactions/_components/Transactions";
import Loading from "@/components/Layout/Loading";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Transactions />
        </Suspense>
    );
}
