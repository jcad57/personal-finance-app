import Pots from "./_components/Pots";
import { getAllPots } from "@/_lib/data-services";
export default async function Page() {
    const pots = await getAllPots();

    return (
        <>
            <Pots pots={pots} />
        </>
    );
}
