import React from 'react'
import Image from 'next/image'

function MagicBox({heading, coverImage}) {
  return (
    <div className='relative rounded-xl h-full cursor-pointer group overflow-hidden ease-in bg-gradient-to-r from-cyan-500 to-blue-500'>
        <h4 className='absolute top-4 left-3 text-white text-lg group-hover:-translate-y-[5rem] transition-all duration-150 ease-in'>{heading}</h4>
        <Image src={coverImage} alt='Blog post cover image' className='rounded-xl w-full h-full aspect-[16/9] shadow-inner object-cover'/>
        <div className='flex flex-col gap-1 group-hover:translate-y-0 absolute border-[1.2px] p-3 border-gray-700 rounded-xl bottom-0 translate-y-[15rem] bg-white w-full transition-all duration-150 ease-in'>
        <div className='flex gap-2'>
          <span className="badge">widget</span>
          <span className='badge'>features</span>
        </div>
        <h5 className='text-xl font-medium'>Introducing Flutter in Focus!</h5>
        <p className='text-thin text-gray-700 text-[1rem] text-ellipsis'>In Flutter, “everything is a widget”! If you want to better
                understand the two kinds of widgets, Stateless and Stateful, see
                the following videos</p>
        <span className='text-thin text-sm text-gray-700'>03-August-2022 - 02 minutes</span>
      </div>
    </div>
  )
}

export default MagicBox