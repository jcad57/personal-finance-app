import { PrimaryCardProps } from "@/_lib/types";

import CardHeader from "./CardHeader";
import EmptyCard from "../EmptyCard";

export default function PrimaryCard({
    children,
    title,
    linkTo,
    more,
    moreText,
    accentDot,
    ellipsis,
    editLabel,
    deleteLabel,
    onEditClick,
    onDeleteClick,
    accentDotTheme,
    altText,
}: PrimaryCardProps) {
    return (
        <EmptyCard>
            {title && (
                <CardHeader
                    title={title}
                    linkTo={linkTo}
                    more={more}
                    moreText={moreText}
                    accentDot={accentDot}
                    accentDotTheme={accentDotTheme}
                    ellipsis={ellipsis}
                    editLabel={editLabel}
                    deleteLabel={deleteLabel}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
                    altText={altText}
                />
            )}
            {children}
        </EmptyCard>
    );
}
