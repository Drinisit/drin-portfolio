import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"

const Skill = () => {
  return (
    <div className='w-full bg-gray-200 py-16 px-6'>
            <div className='max-w-[1240px] mx-auto'>
            <h1 className='text-2xl font-bold uppercase text-center pb-3'>Skills</h1>
                <div className='place-items-center grid xs:grid-cols-2 md:grid-cols-3'>
                    <div className='border-2 border-amber-500 rounded-md py-6 px-12 m-1'>
                        <FaHtml5 className='text-7xl' />
                        <p className='font-bold uppercase text-center'>Html</p>
                    
                    </div>
                    <div className='border-2 border-amber-500 rounded-md py-6 px-12 m-1'>
                        <FaCss3Alt className='text-7xl' />
                        <p className='font-bold uppercase text-center'>Css</p>
                        
                    </div>
                    <div className='border-2 border-amber-500 rounded-md py-6 px-10 m-1'>
                        <DiJavascript className='text-7xl' />
                        <p className='font-bold uppercase text-center'>Javascript</p>
                    
                    </div>
                    <div className='border-2 border-amber-500 rounded-md py-6 px-12 m-1'>
                        <FaReact className='text-7xl' />
                        <p className='font-bold uppercase text-center'>React</p>
                    
                    </div>
                    <div className='border-2 border-amber-500 rounded-md py-6 px-12 m-1'>
                        <SiTailwindcss className='text-7xl' />
                        <p className='font-bold uppercase text-center'>Tailwind</p>
                        
                    </div>
                    <div className='border-2 border-amber-500 rounded-md py-6 px-12 m-1'>
                        <FaGithub className='text-7xl' />
                        <p className='font-bold uppercase text-center'>Github</p>

                    </div>
            </div>
       

       
        </div>
        

           
    </div>
  )
}

export default Skill