import React, { useState } from 'react'
import './SideNavbar.css'
import NavItems from './NavItems'
import { GoHomeFill} from 'react-icons/go'
import { TbMessageCircle2Filled} from 'react-icons/tb'
import { IoNotifications } from 'react-icons/io5'
import { FiChevronLeft } from 'react-icons/fi'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'

//test

const SideNavbar = () => {
  const [ nav, setNav] = useState(true)
  const logout=()=>{
    signOut(auth)
  }
  return (
    <div className={`navigation ${nav && 'active' } w-[25%] md:w-[18%]`}>
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
        <NavItems to='/' title='Home' Icon={GoHomeFill}/>
        <NavItems title='Messages' Icon={TbMessageCircle2Filled}/>
        <NavItems title='Notifications' Icon={ IoNotifications } onClick={logout}/>
        
    </div>
  )
}
export default SideNavbar