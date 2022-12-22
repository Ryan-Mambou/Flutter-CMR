import Image from 'next/image'
import React from 'react'

function Slider({images}) {
  return (
    <div className=' sm:hidden mt-[5rem] mb-5 rounded-3xl bg-green-500 z-50 relative'>
        <ul className='flex flex-row rounded-3xl bg-blue-500'>
            {images.map((image, index) => (
                <li className='min-w-[40rem]'><Image src={image} alt="carousel images" className='object-contain w-full rounded-3xl h-[25rem]'/></li>
            ))}
        </ul>
    </div>
  )
}

export default Slider