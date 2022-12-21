import React from 'react'
import Image from 'next/image'

function OtherBox({coverImage, heading, paragraph}) {
  return (
    <div className='group h-full cursor-pointer'>
        <div className='rounded-xl overflow-hidden'><Image src={coverImage} alt="coverImage" className='object-cover h-[18.75rem] rounded-xl'/></div>
        <h4 className='text-xl font-medium group-hover:text-green-700 pt-1 pb-3'>{heading}</h4>
        <p className='font-thin text-gray-700'>{paragraph}</p>
    </div>
  )
}

export default OtherBox