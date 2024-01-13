import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"

const Skill = () => {
  return (
    <div className='w-full bg-gray-200 px-10 xxs:py-8 md:py-16'>
            <div className='max-w-[1240px] mx-auto grid xxs:grid-cols-2 md:grid-cols-3 xxs:gap-4 md:gap-8'>
                <div className='w-full flex flex-col xxs:col-span-2  md:col-span-3'>
                    <h1 className='font-bold text-center uppercase sm:text-xl md:text-3xl'>Skills</h1>
                </div>
                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-4 md:p-12'>
                        <FaHtml5 size={80} className='mx-auto xxs:w-10' />
                        <p className='font-medium text-center uppercase  mt-3 xxs:text-sm xxs:mt-1 md:text-xl'>Html</p>
                    </div> 

                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-4 md:p-12'>
                        <FaCss3Alt size={80} className='mx-auto xxs:w-10' />
                        <p className='font-medium text-center uppercase mt-3 xxs:text-sm xxs:mt-1 md:text-xl'>Css</p>
                    </div> 
                    
                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-4 md:p-12'>
                        <DiJavascript size={80} className='mx-auto xxs:w-10' />
                        <p className='font-medium text-center uppercase mt-3 xxs:text-sm xxs:mt-1 md:text-xl'>Javascript</p>
                    </div> 

                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-4 md:p-12'>
                        <FaReact size={80} className='mx-auto xxs:w-10' />
                        <p className='font-medium text-center uppercase mt-3 xxs:text-sm xxs:mt-1 md:text-xl'>React</p>
                    </div> 

                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-4 md:p-12'>
                        <SiTailwindcss size={80} className='mx-auto xxs:w-10' />
                        <p className='font-medium text-center uppercase mt-3 xxs:text-sm xxs:mt-1 md:text-xl'>Tailwind</p>
                    </div> 

                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-4 md:p-12'>
                        <FaGithub size={80} className='mx-auto xxs:w-10' />
                        <p className='font-medium text-center uppercase mt-3 xxs:text-sm xxs:mt-1 md:text-xl'>Github</p>
                    </div> 

            </div>     
    </div>
  )
}

export default Skill