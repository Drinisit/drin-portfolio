import React from 'react'
import Logo from '../assets/drin-logo.png'
import { IoMenu, IoClose } from "react-icons/io5"

const Navbar = () => {
  return (
    <div className='max-w-[1240px] items-center mx-auto h-24 p-4 flex justify-between'>
        <img className='h-9 w-9' src={Logo} alt="" />

        <ul className='flex hidden uppercase'>
          <li className='p-3'>Home</li>
          <li className='p-3'>About me</li>
          <li className='p-3'>Skills</li>
          <li className='p-3'>Project</li>
          <li className='p-3'>Contact</li>
        </ul>
        <div>
          <IoMenu size={20} />
        </div>

        <div className='fixed left-0 top-0 w-[80%] border bg-amber-300 h-full'>
        <ul className='pt-4 uppercase'>
        <img className='h-9 w-9 m-3' src={Logo} alt="" />
          <li className='p-3'>Home</li>
          <li className='p-3'>About me</li>
          <li className='p-3'>Skills</li>
          <li className='p-3'>Project</li>
          <li className='p-3'>Contact</li>
        </ul>
        </div>
      
    </div>
  )
}

export default Navbar