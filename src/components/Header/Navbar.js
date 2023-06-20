import React from 'react'
import { BsCart2 } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='flex justify-between p-6'>
    

        <div className='self-center'>
            <h1>Oren</h1>
        </div>
        <div>
            
            <BsCart2 size={26}/>
        </div>
    </div>
  )
}

export default Navbar