import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({listInnerItem, active, to, className, children, onClick}) => {
  return (
    <li className={className} onClick={onClick}>{children}
      <Link to={to} className={`w-full ${active}`}> 
      {listInnerItem}      
      </Link>
    </li>
  )
}

export default ListItem