import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets';

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    
     useEffect(() =>{
        if(mobileMenu){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
        
        return () =>{
            document.body.style.overflow = 'auto';
        }
    }, [mobileMenu])
   
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='w-full flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className=' hidden md:flex gap-7 text-white'>
                <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a></li>
                <li><a href="#About" className='cursor-pointer hover:text-gray-400'>About</a></li>
                <li><a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
                <li><a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
            </ul>
            <button className='hidden md:block bg-white py-2 px-8 rounded-full'>Sign up</button>
            <img src={assets.menu_icon} alt="" className='md:hidden w-7'  onClick={() => setMobileMenu(true)}/>
        </div>

        {/* ------------ mobile-menu ----------- */}
        <div className={`md:hidden ${mobileMenu ? 'w-full fixed' : 'hidden'} top-0 right-0 bottom-0 bg-white transition-all`}>
            <div className='flex justify-end'>
                <img src={assets.cross_icon} alt=""  onClick={() => setMobileMenu(false)}/>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5  text-lg font-medium'>
                <a onClick={() => setMobileMenu(false)} href="#Home" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={() => setMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={() => setMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={() => setMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar