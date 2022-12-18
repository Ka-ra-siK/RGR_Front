import React, { ReactElement } from 'react'

import './property.css'

interface Props {
    title: string
    value?: string | number | ReactElement
    children?: ReactElement
}

export const Property: React.FC<Props> = ({ title, value, children }) => (
    <div className="property">
        <span className="property__title">{title}</span>
        {children ?? <span className="property__value">{value}</span>}
    </div>
)