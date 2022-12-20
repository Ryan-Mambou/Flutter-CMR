import React from 'react'
import Image from 'next/image'

function OtherBox({coverImage, heading, paragraph}) {
  return (
    <div className='group'>
        <div className='rounded-xl overflow-hidden h-full bg-green-400'><Image src={coverImage} alt="coverImage" className='object-fit rounded-xl'/></div>
        <h4 className='text-xl font-medium group-hover:text-green-700'>{heading}</h4>
        <p className='font-thin text-gray-700 transition-all duration-150 ease-in'>{paragraph}</p>
    </div>
  )
}

export default OtherBox