import { PrimaryCardProps } from "@/_lib/types";

import CardHeader from "./CardHeader";
import EmptyCard from "../EmptyCard";

export default function PrimaryCard({
    children,
    header,
    linkTo,
    more,
    moreText,
    accentDot,
    ellipsis,
    accentDotTheme,
    altText,
}: PrimaryCardProps) {
    return (
        <EmptyCard>
            <CardHeader
                title={header}
                linkTo={linkTo}
                more={more}
                moreText={moreText}
                accentDot={accentDot}
                accentDotTheme={accentDotTheme}
                ellipsis={ellipsis}
                altText={altText}></CardHeader>
            {children}
        </EmptyCard>
    );
}
