import { Suspense } from "react";

import RecurringBills from "./_components/RecurringBills";
import Loading from "@/components/Layout/Loading";

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <RecurringBills />
        </Suspense>
    );
}
