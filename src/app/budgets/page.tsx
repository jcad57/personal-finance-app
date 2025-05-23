import { Suspense } from "react";

import Budgets from "./_components/Budgets";
import Loading from "@/components/Layout/Loading";

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Budgets />
        </Suspense>
    );
}
