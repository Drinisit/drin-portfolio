import React from 'react'

const Contact = () => {
  return (
    <div className='w-full py-11 xxs:py-11 xs:px-20 md:py-16 px-12'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2'>
            <div className='p'>
                <h1>Contact Me</h1>
                
                <form action="#">
                    <div className='grid grid-cols-2 gap-4'>
                        <input className='border border-amber-500 py-1 px-2' type="text" placeholder='Firstname' />
                        <input className='border border-amber-500 py-1 px-2' type="text" placeholder='Lastame' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact