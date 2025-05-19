import React from "react";
import IconSelect from './select';

interface HeaderProps {
    className?: string;
    children: React.ReactNode;
}

export const Header = ( { className, children }: HeaderProps ) => {
    return (
        <header className = { className } >
            { children }
        </header>
    );
}