export default function PotsProgressBar({ saved, target, theme }: { saved: number; target: number; theme: string }) {
    return (
        <div className="flex flex-col w-full h-[8px] bg-[var(--beige-100)] rounded-[4px]">
            <div
                className={`h-full rounded-full`}
                style={{ width: `${(saved / target) * 100}%`, backgroundColor: `${theme}` }}></div>
        </div>
    );
}
