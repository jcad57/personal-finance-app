import { Suspense } from "react";

import Pots from "./_components/Pots";
import Loading from "@/components/Layout/Loading";

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Pots />
        </Suspense>
    );
}
