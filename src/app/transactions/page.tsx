import { Suspense } from "react";

import Transactions from "@/app/transactions/_components/Transactions";
import Loading from "@/components/Layout/Loading";

export default async function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Transactions />
        </Suspense>
    );
}
