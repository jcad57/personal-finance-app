import { getAllTransactions } from "@/_lib/data-services";
import Transactions from "@/app/transactions/_components/Transactions";

export default async function Page() {
    const transactions = await getAllTransactions();
    return (
        <>
            <Transactions transactions={transactions} />
        </>
    );
}
