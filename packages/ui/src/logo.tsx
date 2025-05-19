import React from "react";

interface LogoProps {
    className: string;
    src?: string;
    alt?: string;
    loading: "lazy" | "eager";
    decoding: "async" | "sync" | "auto";
}

export const Logo = ({
                         className,
                         src = "https://puesgjbxmhfjnkeuwrnp.supabase.co/storage/v1/object/public/source/logos/logo.svg",
                         alt = "AeroLux Logo",
                         loading = "lazy",
                         decoding = "async" }: LogoProps) => {
    return (
        <img
            className = { className }
            loading = { loading }
            decoding = { decoding }
            src = { src }
            alt = { alt }
        />
    )
}