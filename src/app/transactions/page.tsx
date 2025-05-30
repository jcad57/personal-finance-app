import { Suspense } from "react";

import Transactions from "@/app/transactions/_components/Transactions";
import Loading from "@/components/Layout/Loading";

export default async function Page() {
    // https://medium.com/@rifkyalfarez/next-js-api-management-implement-search-pagination-filter-sort-and-limit-features-61e001293141
    return (
        <Suspense fallback={<Loading />}>
            <Transactions />
        </Suspense>
    );
}
