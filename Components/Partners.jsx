import React from 'react'
import Image from 'next/image'
import GDGIcon from '../public/images/5.svg'
import likeConceptIcon from '../public/images/14.svg'
import laravelIcon from '../public/images/15.svg'
import darkCodeIcon from '../public/images/8.svg'
import aIcon from '../public/images/16.svg'

function Partners() {
  return (
    <div className='md:mx-10 mt-10 bg-black z-10 rounded-xl px-4 pt-8 pb-4 flex md:flex-row flex-col md:gap-20 gap-5 items-center mx-6 z-50'>
        <div className='flex flex-col gap-4 items-start'>
            <h3 className='text-white text-3xl font-bold'>Partners</h3>
            <span className='text-white'>A very big thank you to all our partners for their continued partnership.
             If you’re interested in being showcased throughout Flutter Cameroon, contact <span className='text-yellow-400'>sponsor@fluttercm.dev</span> 
             to discuss sponsorship opportunities.</span>
             <button className='rounded-lg border-2 text-yellow-400 border-yellow-400 py-1 px-6 hover:bg-yellow-400 hover:text-black'>Become a Partner</button>
        </div>
        <div className='flex flex-wrap gap-5 justify-center'>
            <Image src={darkCodeIcon} alt="partner-icons"/>
            <Image src={likeConceptIcon} alt="partner-icons"/>
            <Image src={laravelIcon} alt="partner-icons"/>
            <Image src={aIcon} alt="partner-icons"/>
            <Image src={GDGIcon} alt="partner-icons"/>
        </div>
    </div>
  )
}

export default Partners