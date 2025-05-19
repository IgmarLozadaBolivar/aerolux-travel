import React from 'react';

interface ItemProps {
    children: React.ReactNode;
    className: string;
}

export const ItemList = ( { children, className }: ItemProps ) => {
    return (
        <li className = { className }>
            { children }
        </li>
    );
}