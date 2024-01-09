import React from 'react'
import Logo from '../assets/drin-logo.png'

const Navbar = () => {
  return (
    <div className='max-w-[1240px]'>
        <img className='h-10 w-10' src={Logo} alt="" />

        <div className='flex'>
            <div className='p-3'>Home</div>
            <div className='p-3'>About me</div>
            <div className='p-3'>Skills</div>
            <div className='p-3'>Project</div>
            <div className='p-3'>Contact</div>
            <div className='p-3'>Resume</div>
        </div>
    </div>
  )
}

export default Navbar