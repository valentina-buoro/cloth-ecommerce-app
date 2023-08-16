import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-6'>
    

        <div className='self-center'>
            <h1>Zoren</h1>
        </div>
        <div>  
           <Link to='/checkout'>
           <BsCart2 size={26}/>
           </Link>
        </div>
    </div>
  )
}

export default Navbar