import React from 'react'
import Img1 from '../assets/lnu-lib.jpg'
import Img2 from '../assets/pizzasap.jpg'
import Img3 from '../assets/manhwasite.jpg'
import Img4 from '../assets/shoetha.jpg'

const Project = () => {
  return (
    <div className='w-full py-11 px-4'>
        <div className='max-w-[1240px] mx-auto grid gap-4 grid-cols-4'>
            <div className='w-full flex flex-col col-span-4'>
                <h1 className='text-3xl font-bold uppercase text-center'>Project</h1>
            </div>
            

            <div>
                <img src={Img1} alt="" />
                <h2>Title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>

            <div>
                <img src={Img2} alt="" />
                <h2>Title</h2>
                <p>Iure ratione, iusto ipsum deserunt nulla id repellendus vitae dolorum eos suscipit fugiat veniam ullam.</p>
            </div>

            <div>
                <img src={Img3} alt="" />
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div>
                <img src={Img4} alt="" />
                <h2>Title</h2>
                <p>Hic unde amet nisi nobis enim deleniti at vero reprehenderit culpa voluptatum dolor nemo nam fuga eum.</p>
            </div>

        </div>

    </div>
  )
}

export default Project