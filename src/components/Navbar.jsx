import React,{useState} from 'react'
import Logo from '../assets/drin-logo.png'
import { IoMenu, IoClose } from "react-icons/io5"

const Navbar = () => {
  const [nav,setNav] = useState(false)

  const handleNav = () => {
      setNav(!nav)
  }

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
        <div onClick={handleNav}>
          {!nav ? <IoClose className='z-50' size={20}/> : <IoMenu size={20} />}
          
        </div>

        <div  className={!nav ? 'fixed left-0 top-0 w-[100%] border bg-amber-400 h-full' : 'fixed left-[100%]' }>
          <ul className='pt-3 uppercase'>
          <img className='h-9 w-9 m-3' src={Logo} alt="" />
            <li className='p-3 border-b border-amber-600'>Home</li>
            <li className='p-3 border-b border-amber-600'>About me</li>
            <li className='p-3 border-b border-amber-600'>Skills</li>
            <li className='p-3 border-b border-amber-600'>Project</li>
            <li className='p-3'>Contact</li>
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar