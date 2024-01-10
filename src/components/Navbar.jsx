import React,{useState} from 'react'
import Logo from '../assets/drin-logo.png'
import { IoMenu, IoClose } from "react-icons/io5"

const Navbar = () => {
  const [nav,setNav] = useState(true)

  const handleNav = () => {
      setNav(!nav)
  }

  return (
    <div className='max-w-[1240px] items-center mx-auto h-24 p-4 flex justify-between'>
        <img className='h-9 w-9' src={Logo} alt="" />

        <ul className='hidden md:flex uppercase'>
          <li className='p-3'>Home</li>
          <li className='p-3'>About me</li>
          <li className='p-3'>Skills</li>
          <li className='p-3'>Project</li>
          <li className='p-3'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <IoClose className='text-xl'/> : <IoMenu className='text-xl' />}
          
        </div>

        <div  className={!nav ? 'fixed left-0 top-0 w-[90%] border bg-amber-400 h-full ease-in-out duration-500' : 'fixed right-[100%]' }>
          <ul className='pt-4 uppercase'>
          <img className='h-9 w-9 m-3' src={Logo} alt="" />
            <li className='p-4 border-b border-amber-500'>Home</li>
            <li className='p-4 border-b border-amber-500'>About me</li>
            <li className='p-4 border-b border-amber-500'>Skills</li>
            <li className='p-4 border-b border-amber-500'>Project</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar