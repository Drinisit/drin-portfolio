import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"

const Skill = () => {
  return (
    <div className='w-full bg-gray-200 py-16 px-6'>
            <div className='max-w-[1240px] mx-auto grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <div className='w-full flex flex-col xs:col-span-2 md:col-span-3 lg:col-span-3'>
                    <h1 className='font-bold text-center uppercase sm:text-xl md:text-3xl'>Skills</h1>
                </div>
                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <FaHtml5 className='w-20 h-20 mx-auto' />
                    <p className='font-medium text-center uppercase mt-3 xs:text-sm md:text-xl'>Html</p>
                </div> 

                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <FaCss3Alt className='w-20 h-20 mx-auto' />
                    <p className='font-medium text-center uppercase mt-3 xs:text-sm md:text-xl'>Css</p>
                </div> 
                
                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <DiJavascript className='w-20 h-20 mx-auto' />
                    <p className='font-medium text-center uppercase mt-3 xs:text-sm md:text-xl'>Javascript</p>
                </div> 

                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <FaReact className='w-20 h-20 mx-auto' />
                    <p className='font-medium text-center uppercase mt-3 xs:text-sm md:text-xl'>React</p>
                </div> 

                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <SiTailwindcss className='w-20 h-20 mx-auto' />
                    <p className='font-medium text-center uppercase mt-3 xs:text-sm md:text-xl'>Tailwind</p>
                </div> 

                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <FaGithub className='w-20 h-20 mx-auto' />
                    <p className='font-medium text-center uppercase mt-3 xs:text-sm md:text-xl'>Github</p>
                </div> 

            </div>     
    </div>
  )
}

export default Skill