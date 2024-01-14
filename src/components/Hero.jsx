import React from 'react'
import Me from '../assets/drin-img.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    
    <div className='w-ful py-11 px-6'>
      <div className='max-w-[1240px] mx-auto grid sm:grid-cols-2'>
        <div className='my-auto'>
          <p className='uppercase'>Mama mo build</p>
          <h1 className='text-3xl font-bold '>Hi, I'm Aldrin Isit</h1>
          <p>An aspiring Web Developer who specialized on Front-End base in Pangasinan, Philippines.</p>
          <button className='bg-amber-500 border border-amber-500 font-medium p-2 my-2'>About me</button> 
          <button className='border border-amber-500 font-medium py-2 px-4 mx-2 hover:bg-white'>Resume</button>
          <div>
            <FontAwesomeIcon className='text-xl mt-1' icon={faFacebook}/>
            <FontAwesomeIcon className='text-xl mt-1 ml-3.5 mr-2' icon={faInstagram}/>
            <FontAwesomeIcon className='text-xl mt-1 mx-2' icon={faGithub}/>
            <FontAwesomeIcon className='text-xl mt-1 mx-2' icon={faLinkedin}/>
          </div>
        </div>
        <div className='hidden sm:block '>
        <img className='p-3 items-center mx-auto' src={Me} alt="" />
        </div>
      </div>
      
        
    </div>
  )
}

export default Hero