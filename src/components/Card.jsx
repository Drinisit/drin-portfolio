import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"

const Card = () => {
  return (
    <div className='w-full py-11 px-6'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='p-4 grid gap-4 xxs:px-16 xxs:grid-cols-2 md:px-28 md:grid-cols-3 md:gap-6 lg:px-48 '>
          <h1 className='text-3xl font-bold uppercase text-center xxs:col-span-2 md:col-span-3'>Skills</h1>

            <div className='h-10 border border-amber-500 rounded-md xxs:h-auto xs:square'>
              <FaHtml5 size={70} className='mx-auto p-4' />
              <p className='uppercase font-semibold pb-2 text-center'>Html</p>
              </div>
            <div className='h-10 border border-amber-500 rounded-md  xxs:h-auto xs:square'>
              <FaCss3Alt size={70} className='mx-auto p-4 as' />
              <p className='uppercase font-semibold pb-2 text-center'>Css</p>
              </div>
            <div className='h-10 border border-amber-500 rounded-md xxs:h-auto xs:square'>
              <DiJavascript size={70} className='mx-auto p-4' />
              <p className='uppercase font-semibold pb-2 text-center'>Javascript</p>
              </div>
            <div className='h-10 border border-amber-500 rounded-md  xxs:h-auto xs:square'>
              <FaReact size={70} className='mx-auto p-4' />
              <p className='uppercase font-semibold pb-2 text-center'>React</p>
              </div>
            <div className='h-10 border border-amber-500 rounded-md xxs:h-auto xs:square'>
              <SiTailwindcss size={70} className='mx-auto p-4' />
              <p className='uppercase font-semibold pb-2 text-center'>Tailwind</p>
              </div>
            <div className='h-10 border border-amber-500 rounded-md  xxs:h-auto xs:square'>
              <FaGithub size={70} className='mx-auto p-4' />
              <p className='uppercase font-semibold pb-2 text-center'>Github</p>
              </div>
       </div>

      </div>
       

    </div>
  )
}

export default Card