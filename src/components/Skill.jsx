import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"

const Skill = () => {
  return (
    <div className='w-full bg-gray-200 py-16 px-6'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
 
                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <FaHtml5 className='w-20 h-20 mx-auto' />
                    <p className='text-xl font-medium text-center uppercase mt-3'>Html</p>
                </div> 

                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <FaCss3Alt className='w-20 h-20 mx-auto' />
                    <p className='text-xl font-medium text-center uppercase mt-3'>Css</p>
                </div> 
                
                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <DiJavascript className='w-20 h-20 mx-auto' />
                    <p className='text-xl font-medium text-center uppercase mt-3'>Javascript</p>
                </div> 

                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <FaReact className='w-20 h-20 mx-auto' />
                    <p className='text-xl font-medium text-center uppercase mt-3'>React</p>
                </div> 

                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <SiTailwindcss className='w-20 h-20 mx-auto' />
                    <p className='text-xl font-medium text-center uppercase mt-3'>Tailwind</p>
                </div> 

                <div className='w-full shadow-xl flex flex-col border border-amber-500 rounded-md p-12'>
                    <FaGithub className='w-20 h-20 mx-auto' />
                    <p className='text-xl font-medium text-center uppercase mt-3'>Github</p>
                </div> 

            </div>     
    </div>
  )
}

export default Skill