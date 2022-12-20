import React from 'react'
import Image from 'next/image'

function MagicBox({heading, coverImage}) {
  return (
    <div className='relative rounded-xl shadowInset h-76 cursor-pointer group overflow-hidden ease-in'>
        <h4 className='absolute top-4 left-3 text-white text-lg group-hover:-translate-y-[5rem] transition-all duration-150 ease-in'>{heading}</h4>
        <Image src={coverImage} alt='Blog post cover image' className='rounded-xl w-full h-full shadow-inner object-cover'/>
        <div className='flex flex-col gap-1 group-hover:translate-y-0 absolute border-[1.2px] p-3 border-gray-700 rounded-xl bottom-0 translate-y-[10rem] bg-white w-full transition-all duration-150 ease-in'>
        <div className='flex gap-2'>
          <span className="badge">widget</span>
          <span className='badge'>features</span>
        </div>
        <h5 className='text-2xl font-medium'>Title</h5>
        <p className='text-thin text-gray-700 text-[1.2rem]'>La story</p>
        <span className='text-thin text-sm text-gray-700'>03-August-2022 - 02 minutes</span>
      </div>
    </div>
  )
}

export default MagicBox