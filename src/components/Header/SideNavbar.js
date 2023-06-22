import React, { useState } from 'react'
import './SideNavbar.css'
import NavItems from './NavItems'
import { GoHomeFill} from 'react-icons/go'
import { TbMessageCircle2Filled} from 'react-icons/tb'
import { IoNotifications } from 'react-icons/io5'
import { FiChevronLeft } from 'react-icons/fi'

const SideNavbar = () => {
  const [ nav, setNav] = useState(false)
  return (
    <div className={`navigation ${nav && 'active' }`}>
      <div className={`menu ${nav && 'active'}`} onClick={()=>{
        setNav((prevState)=>!prevState)
      }}>
        <FiChevronLeft className='menu-icon'/>
      </div>
        <header>
            <div className='profile'>
                <img src = '' alt='user-img' className='profile-img'/>
            </div>
            <span>Welcome Tina!</span>
        </header>
        <div className='divider'></div>
        <NavItems title='Home' Icon={GoHomeFill}/>
        <NavItems title='Messages' Icon={TbMessageCircle2Filled}/>
        <NavItems title=''/>
        <NavItems title='Messages' Icon={ IoNotifications }/>
    </div>
  )
}
export default SideNavbar