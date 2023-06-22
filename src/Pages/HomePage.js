import React from 'react'
import Products from '../components/Products/Products'
import SideNavbar from '../components/Header/SideNavbar'
//import SideNavbar from '../components/Header/SideNavbar'

const HomePage = () => {
  return (
    <div className='flex flex-row'>
    <SideNavbar/>
    <Products/>
    </div>
  )
}

export default HomePage