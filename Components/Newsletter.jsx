import React from 'react'
import Image from 'next/image'
import backgrounSvg from '../public/images/31.svg'

function Newsletter() {
  return (
    <div className='w-full mt-10 bg-green-800 flex flex-col items-center gap-3 py-4 mb-4 relative'>
        <Image src={backgrounSvg} alt="background" className='absolute top-0'/>
        <h2 className='text-white font-medium text-[2.6rem]'>Join our newsletter</h2>
        <span className='text-white text-lg'>Join our newsletter to receive tutorials, articles and podcasts on web design and programming.</span>
        <div className='flex flex-row gap-3'>
            <input type="text" className='rounded-lg px-5 z-10 focus:ring-gray-500 focus:outline-gray-400 text-gray-500 font-semibold' placeholder='Enter your email address' />
            <button type='submit' className='rounded-lg py-2 px-4 z-10 cursor-pointer bg-green-500 text-green-800 hover:bg-green-600 transition-all ease-linear'>Sign up</button>
        </div>
    </div>
  )
}

export default Newsletter