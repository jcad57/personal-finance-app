import { getOverviewData } from "@/_lib/data-services";
import { OverviewDataType } from "@/_lib/types";

// import Navigation from "@/components/Navbar/Navigation";
import Overview from "@/components/Dashboard/Overview";

async function fetchData() {
    const { currentBalance, currentIncome, currentExpenses, potsTotalSaved } = await getOverviewData();
    return { currentBalance, currentIncome, currentExpenses, potsTotalSaved };
}

export default async function Home() {
    const overviewData: OverviewDataType = await fetchData();
    return (
        <>
            <Overview overviewData={overviewData} />
        </>
    );
}
