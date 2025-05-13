export default function VerticalAccent({ theme }: { theme?: string }) {
    return <div className="w-[4px] rounded-full" style={{ backgroundColor: `${theme ? theme : ""}` }}></div>;
}
