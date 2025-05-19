import React from 'react';

interface MenuItemProps {
    className?: string;
    children?: React.ReactNode;
}

export const MenuItems = ( { className, children }: MenuItemProps ) => {
    return (
        <ul className = { className }>
            { children }
        </ul>
    );
}