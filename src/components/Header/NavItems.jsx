import React from 'react'
import './NavItems.css'
import { NavLink } from 'react-router-dom'

const NavItems = ({Icon, title, route}) => {
  return (
    <NavLink to={route} className='nav' >
        {Icon && <Icon className='icon'/>}
        <h2>{title ? title : null}</h2>
    </NavLink>
  )
}

export default NavItems