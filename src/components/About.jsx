import React from 'react'
import Me from '../assets/drin-img.png'

const About = () => {
  return (
    <div className='w-full py-11 px-4'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2'>
            <div>
                <img src={Me} alt="" />
            </div>

            <div>
                <h1>About me</h1>
                <p>Meet Aldrin Jay Isit, a talented and motivated web development enthusiast with a solid foundation in Information Technology. Aldrin Jay proudly holds a Bachelor of Science degree in Information Technology from Pangasinan State University, showcasing his commitment to academic excellence.</p>

                <p>I dedicate my time to self-study in web development. With an insatiable curiosity and a love for crafting visually appealing and user-friendly websites, he's rapidly acquiring skills in HTML, CSS, JavaScript, and other front-end technologies. My ambition is to harness my technical prowess and creative flair to build captivating and functional web experiences.</p>
            </div>
        </div>

    </div>
  )
}

export default About