export default function ListDivider({ children }: { children: React.ReactNode }) {
    return <div className="not-first:border-t-[1px]">{children}</div>;
}

// [&:not(:last-child)&:not(:first-child)]:py-[${gap}px] [&:last-child]:pt-[${gap}px] [&:first-child]:pb-[${gap}px]
