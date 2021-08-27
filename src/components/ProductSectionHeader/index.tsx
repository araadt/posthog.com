import React from 'react'

interface ProductSectionHeaderProps {
    id: string
    name: string
}

export const ProductSectionHeader = ({ id, name }: ProductSectionHeaderProps) => {
    return (
        <h2
            id={id}
            className={`text-center text-gray text-sm uppercase border-2 border-gray-accent-light border-dashed border-l-0 border-r-0 p-4 header-${id}`}
        >
            {name}
        </h2>
    )
}
