import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"

const Card = () => {
  return (
    <div className='w-full py-11 px-6'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='p-4 grid gap-4 xs:px-16 xs:grid-cols-2 md:px-28 md:grid-cols-3 md:gap-6 lg:px-48 '>
          <h1 className='text-3xl font-bold uppercase text-center xs:col-span-2 md:col-span-3'>Skills</h1>
            <div className='h-10 bg-amber-400 xs:h-auto xs:square'><FaHtml5 size={70} className='mx-auto' /></div>
            <div className='h-10 bg-orange-400  xs:h-auto xs:square'><FaCss3Alt size={70} className='mx-auto' /></div>
            <div className='h-10 bg-amber-400 xs:h-auto xs:square'><DiJavascript size={70} className='mx-auto' /></div>
            <div className='h-10 bg-orange-400  xs:h-auto xs:square'><FaReact size={70} className='mx-auto' /></div>
            <div className='h-10 bg-amber-400 xs:h-auto xs:square'><SiTailwindcss size={70} className='mx-auto' /></div>
            <div className='h-10 bg-orange-400  xs:h-auto xs:square'><FaGithub size={70} className='mx-auto' /></div>
       </div>

      </div>
       

    </div>
  )
}

export default Card