import React  from 'react'

interface NavigationProps {
    className?: string;
    children: React.ReactNode;
}

export const Navigation = ({ className, children }: NavigationProps ) => {
    return (
        <ul className = { className }>
            { children }
        </ul>
    );
}