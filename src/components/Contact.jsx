import React from 'react'

const Contact = () => {
  return (
    <div className='w-full py-11 xxs:py-11 xs:px-20 md:py-16 px-12'>
        <div className='max-w-[1240px] mx-auto grid gap-4 xxs:grid-cols-1 md:grid-cols-2'>
            <div className='border border-amber-500 rounded-md p-4 shadow-lg'>
                <h1 className='text-xl uppercase font-bold mb-2'>Contact Me</h1>
                
                <form action="#">
                    <div className='grid grid-cols-2 gap-4'>
                        <input className='border border-amber-500 py-1 px-2' type="text" placeholder='Firstname' />
                        <input className='border border-amber-500 py-1 px-2' type="text" placeholder='Lastame' />
                    </div>

                    <div className='mt-2'>
                        <input className='border border-amber-500 w-full py-1 px-2' type="text" placeholder='Email'/>
                    </div>
                    <div className='mt-2'>
                        <textarea className='border border-amber-500 w-full py-1 px-2' type="text" placeholder='Leave your message here.' cols="20" rows="7" />
                    </div>
                    <div className='mt-1'>
                        <button className='w-full bg-amber-500 rounded-md py-1'>Send</button>
                    </div>

                    
                </form>
            </div>

            <div className='p-4'>
                <h1 className='text-xl font-bold uppercase'>Get in touch</h1>

                <p className='mt-2'>Aldrin Jay Isit is a driven individual with a strong interest in web development. With a focus on front-end development, Aldrin Jay is etnthusiastic about creating visually appealing and user-friendly websites, continually honing his skills in this </p>

                <p className='mt-2'>I'm from Calasiao, Pangasinan</p>

                <p className='mt-2'>Email me at aldrinisit3196@gmail.com</p>

            </div>
        </div>
    </div>
  )
}

export default Contact