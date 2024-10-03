import React from 'react'

const List = ({className, children, id}) => {
    return(
        <ul id={id} className={`flex ${className}`}>{children}</ul>
    )
}

export default List