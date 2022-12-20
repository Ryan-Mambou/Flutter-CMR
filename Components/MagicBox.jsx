import React from 'react'
import Image from 'next/image'

function MagicBox({heading, coverImage}) {
  return (
    <div className='relative rounded-2xl shadowInset w-64 h-72 cursor-pointer group overflow-hidden ease-in'>
        <h4 className='absolute top-4 left-3 text-white text-lg group-hover:text-yellow-400'>{heading}sdf</h4>
        <Image src={coverImage} alt='Blog post cover image' className='rounded-2xl w-full h-full shadow-inner object-cover'/>
        <div className='group-hover:h-36 absolute border-1 p-3 border-gray-700 rounded-xl bottom-0 h-0 bg-white w-full transition-all duration-150 ease-in'>
        <div>
          <span>widget</span>
          <span>features</span>
        </div>
        <h5 className='text-2xl font-medium'>Title</h5>
        <p className='text-thin text-gray-700 text-[1.2rem]'>La story</p>
        <span className='text-thin text-sm text-gray-700'>03-August-2022 - 02 minutes</span>
      </div>
    </div>
  )
}

export default MagicBox