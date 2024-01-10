import React from 'react'
import Me from '../assets/drin-img.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <div className='max-w-[1240px] mx-auto items-center p-4'>
      <div>
        <p className='uppercase'>Mama mo build</p>
        <h1 className='text-3xl font-bold '>Hi, I'm Aldrin Isit</h1>
        <p>An aspiring Web Developer who specialized on Front-End base in Pangasinan, Philippines</p>
        <button className='bg-amber-500 border border-amber-500 p-2 my-2'>About me</button> 
        <button className='border border-amber-500 p-2 mx-2'>Resume</button>
        <div>
          <FontAwesomeIcon className='text-xl mt-1' icon={faFacebook}/>
          <FontAwesomeIcon className='text-xl mt-1 mx-3' icon={faInstagram}/>
          <FontAwesomeIcon className='text-xl mt-1 mx-2' icon={faGithub}/>
          <FontAwesomeIcon className='text-xl mt-1 mx-2' icon={faLinkedin}/>
        </div>
      </div>
        <img src={Me} alt="" />
    </div>
  )
}

export default Hero