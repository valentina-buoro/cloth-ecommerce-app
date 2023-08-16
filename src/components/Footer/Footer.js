import React from 'react'
import { FaTwitter, FaLinkedin,FaGithub, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white flex flex-col md:flex-row items-center p-6 md:p-12 justify-between'> 
        <div>
           <p>
            Created by Valentina Buoro
           </p>
            <div className='flex flex-row gap-2'> 
              <div>
              <a href='https://linkedin.com/in/valentina-buoro'><FaWhatsapp size={30} style={{color:'#fff'}} /></a>
              </div>
              <div>
                <span>
                  talk on whatsapp
                </span>
              </div>
            </div>
        </div>
        <div className='mt-8'>
            <p>social media links</p>
            <div className=' flex flex-col items-start md:flex-row gap-4' >
                <div className='flex flex-col items-start md:items-center justify-center gap-2'> 
                <div className='md:p-4'>
                <a href='https://github.com/queen-x-vee' className=''><FaGithub size={30} style={{color:'#fff'}} /></a>
                </div>
                <span>Github</span>
                </div>
               <div className='flex flex-col items-start md:items-center justify-center gap-2' >
               <div className='md:p-4'>
               <a href='https://twitter.com/omose_B'><FaTwitter size={30} style={{color:'#fff'}} /></a>
               </div>
               <div>
               <span>X </span>
               <span className='text-[0.675rem] mt-2'>(formerly known as Twitter)</span>
               </div>
               </div>
                <div className='flex flex-col items-start md:items-center justify-center gap-2'>
                <div className='md:p-4'>
                <a href='https://linkedin.com/in/valentina-buoro'><FaLinkedin size={30} style={{color:'#fff'}} /></a>
                </div>
                <span>Linkedin</span>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Footer