import React, { useEffect, useState } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [username , setUsername] = useState('')
  useEffect(()=>{
    setUsername(localStorage.getItem('username'))
  },[])
  return (
    <div className='flex justify-between p-6'>
    

        <div className='self-center'>
            <h1>Zoren</h1>
        </div>

        <div className='flex gap-10'>
        <span className='mx-5'>Welcome {username}</span>
      
        <div>  
          
           <Link to='/checkout'>
           <BsCart2 size={26}/>
           </Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar