import React from 'react'
import Image from 'next/image'
import topImage from '../public/images/2.jpeg'
import bottomImage from '../public/images/3.jpeg'
import leftImage from '../public/images/1.jpeg'
import rightImage from '../public/images/4.jpeg'
import backgroundSvg from '../public/images/6.svg'
import Stats from './Stats'

function Banner() {
  return (
    <div className='px-10 flex gap-30'>
        <Image src={backgroundSvg} className="absolute right-0 -z-10"/>
        <div className="flex flex-col z-10">
        <div className='flex flex-col py-[14rem] gap-4'>
            <h1 className='font-bold text-6xl'>A community open to everyone</h1>
            <p className='text-xl text-gray-600'>Flutter Cameroon is an initiative to focus the efforts of many developers in and around Cameroon to learn, share and become productive using Flutter.</p>
            <div className='flex'>
                <button className='bg-green-700 text-white rounded-md py-1 px-5 border 2 cursor-pointer'>Join the 237 community</button>
                <button className='border-2 text-green-900 border-green-700 hover:bg-gray-100 rounded-md py-1 px-5 ml-2 cursor-pointer'>Visit forum</button>
                </div>
            </div>

            <div className='flex gap-16'>
                <Stats stat="Members on Meetup" number="106k"/>
                <Stats stat="Stars on GitHub" number="127k"/>
                <Stats stat="Followers on Twitter" number="151.4k"/>
            </div>
        </div>
            <div className='md:flex md:items-center md:gap-2 z-10 hidden shrink-0'>
                <Image src={leftImage} className="full-rounded-image" />
                <div className='flex flex-col w-36 gap-2'>
                <Image src={topImage} className="full-rounded-image w-36"/>
                <Image src={bottomImage} className="full-rounded-image"/>
                </div>
                <Image src={rightImage} className="full-rounded-image"/>
            </div>
    </div>
  )
}

export default Banner