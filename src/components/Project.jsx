import React from 'react'
import Img1 from '../assets/lnu-lib.jpg'
import Img2 from '../assets/pizzasap.jpg'
import Img3 from '../assets/manhwasite.jpg'
import Img4 from '../assets/shoetha.jpg'

const Project = () => {
  return (
    <div className='w-full py-11 xxs:py-11 xs:px-20 md:py-16 px-12'>
        <div className='max-w-[1240px] mx-auto grid gap-4 xxs:grid-cols-2 lg:grid-cols-4'>
            <div className='w-full flex flex-col xxs:col-span-2 lg:col-span-4'>
                <h1 className='text-3xl font-bold uppercase text-center'>Project</h1>
            </div>
            

            <div className='bg-amber-500 rounded-lg shadow-lg flex flex-col mt-3'>
                <img className='rounded-t-lg' src={Img1} alt="" />
                <div className='p-4'>
                  <h2 className='text-2x font-bold text-center'>L-NU Website</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
            </div>

            <div className='bg-amber-500 rounded-lg shadow-lg flex flex-col mt-3'>
              <img className='rounded-t-lg' src={Img2} alt="" />
              <div className='p-4'>
                <h2 className='text-2x font-bold text-center'>Pizzarap</h2>
                <p>Iure ratione, iusto ipsum deserunt nulla id repellendus vitae dolorum eos suscipit fugiat veniam ullam.</p>
              </div>
            </div>

            <div className='bg-amber-500 rounded-lg shadow-lg flex flex-col mt-3'>
                <img className='rounded-t-lg' src={Img3} alt="" />
                <div className='p-4'>
                  <h2 className='text-2x font-bold text-center'>ManhwaGG</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            <div className='bg-amber-500 rounded-lg shadow-lg flex flex-col mt-3'>
                <img className='rounded-t-lg' src={Img4} alt="" />
                <div className='p-4'>
                <h2  className='text-2x font-bold text-center'>Shoetah</h2>
                <p>Hic unde amet nisi nobis enim deleniti at vero reprehenderit culpa voluptatum dolor nemo nam fuga eum.</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Project