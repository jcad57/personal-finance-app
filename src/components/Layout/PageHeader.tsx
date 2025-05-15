export default function PageHeader({ title }: { title: string }) {
    return <h1 className="text-[length:var(--font-size-xl)] font-bold mb-[var(--spacing-xl)]">{title}</h1>;
}
