import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"

const Skill = () => {
  return (
    <div className='w-full xxs:py-11 xs:px-20 md:py-16 px-12'>
            <div className='max-w-[1240px] mx-auto grid gap-4 xxs:grid-cols-2 md:grid-cols-3 md:gap-6 lg:px-32'>
                <div className='w-full flex flex-col xxs:col-span-2  md:col-span-3'>
                    <h1 className='font-bold text-center uppercase sm:text-xl md:text-3xl md:pb-8'>Skills</h1>
                </div>
                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-3 md:px-12'>
                        <FaHtml5 size={80} className='mx-auto xxs:w-10 xxs:-mt-2' />
                        <p className='font-medium text-center uppercase  mt-3 xxs:text-sm xxs:-mt-2 sm:mt-1 md:text-base'>Html</p>
                    </div> 

                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-3 md:px-12'>
                        <FaCss3Alt size={80} className='mx-auto xxs:w-10 xxs:-mt-2' />
                        <p className='font-medium text-center uppercase mt-3 xxs:text-sm xxs:-mt-2 sm:mt-1 md:text-base'>Css</p>
                    </div> 
                    
                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-3 md:px-12'>
                        <DiJavascript size={80} className='mx-auto xxs:w-14 xxs:-mt-2' />
                        <p className='font-medium text-center uppercase mt-3 xxs:text-sm xxs:-mt-2 sm:mt-1 md:text-base'>Javascript</p>
                    </div> 

                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-3 md:px-12'>
                        <FaReact size={80} className='mx-auto xxs:w-10 xxs:-mt-2' />
                        <p className='font-medium text-center uppercase mt-3 xxs:text-sm xxs:-mt-2 sm:mt-1 md:text-base'>React</p>
                    </div> 

                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-3 md:px-12'>
                        <SiTailwindcss size={80} className='mx-auto xxs:w-10 xxs:-mt-2' />
                        <p className='font-medium text-center uppercase mt-3 xxs:text-sm xxs:-mt-2 sm:mt-1 md:text-base'>Tailwind</p>
                    </div> 

                    <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md xxs:p-3 md:px-12'>
                        <FaGithub size={80} className='mx-auto xxs:w-10 xxs:-mt-2' />
                        <p className='font-medium text-center uppercase mt-3 xxs:text-sm xxs:-mt-2 sm:mt-1 md:text-base'>Github</p>
                    </div> 

            </div>     
    </div>
  )
}

export default Skill