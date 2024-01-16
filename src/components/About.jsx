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

                <p>Currently, Aldrin Jay is making waves in the tech world as a Technical Support professional at Lyceum-Northwestern University, where his expertise and dedication shine through in assisting and resolving technical issues. What sets Aldrin Jay apart is his unwavering passion for web development. He's not just a professional; he's a self-driven learner on a mission to become a Front-end Developer.</p>

                <p>Outside of his professional responsibilities, Aldrin Jay dedicates his time to self-study in web development. With an insatiable curiosity and a love for crafting visually appealing and user-friendly websites, he's rapidly acquiring skills in HTML, CSS, JavaScript, and other front-end technologies. Aldrin Jay's ambition is to harness his technical prowess and creative flair to build captivating and functional web experiences. As he continues to develop his skills, the future holds great promise for Aldrin Jay Isit as he embarks on his journey towards becoming a sought-after Front-end Developer in the ever-evolving world of web development.</p>
            </div>
        </div>

    </div>
  )
}

export default About