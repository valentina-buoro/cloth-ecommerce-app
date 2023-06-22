import React from 'react'
import './NavItems.css'

const NavItems = ({Icon, title}) => {
  return (
    <div className='nav' >
        {Icon && <Icon className='icon'/>}
        <h2>{title ? title : null}</h2>
    </div>
  )
}

export default NavItems