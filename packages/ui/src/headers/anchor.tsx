import React from "react";

interface AnchorProps {
    className?: string;
    href?: string;
    text?: string;
}

export const Anchor = ( { className, href, text }: AnchorProps ) => {
    return (
        <a className = { className } href = { href } >
            { text }
        </a>
    );
}