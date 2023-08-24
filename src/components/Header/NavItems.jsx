import React from 'react'
import './NavItems.css'
import { Link } from 'react-router-dom'

const NavItems = ({Icon, title, route, onClick}) => {
  return (
    <div className='nav'  onClick={onClick}>
        <Link to={route} className='text-white no-underline flex flex-col md:flex-row'>
        {Icon && <Icon className='icon'/>}
        <h2>{title ? title : null}</h2>
        </Link>
    </div>
  )
}

export default NavItems