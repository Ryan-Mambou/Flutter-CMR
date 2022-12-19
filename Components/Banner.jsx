import React from 'react'
import Image from 'next/image'
import topImage from '../public/images/2.jpeg'
import bottomImage from '../public/images/3.jpeg'
import leftImage from '../public/images/1.jpeg'
import rightImage from '../public/images/4.jpeg'

function Banner() {
  return (
    <div className='px-10 flex justify-between items-center'>
        <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-6xl'>A community open to everyone</h1>
            <p>Flutter Cameroon is an initiative to focus the efforts of many developers in and around Cameroon to learn, share and become productive using Flutter.</p>
            <div className='flex'>
                <button className='bg-green-700 text-white rounded-md py-1 px-5 border 2 cursor-pointer'>Join the 237 community</button>
                <button className='border-2 text-green-900 border-green-700 hover:bg-gray-100 rounded-md py-1 px-5 ml-2 cursor-pointer'>Visit forum</button>
                </div>
        </div>
        <div className="bg-bannersvg">
            <div className='flex items-center gap-2'>
                <Image src={leftImage} className="h-96 w-36 object-cover rounded-full" />
                <div className='flex flex-col'>
                <Image src={topImage} className="h-96 w-36 object-cover"/>
                <Image src={bottomImage} className="h-96 w-36 object-cover"/>
                </div>
                <Image src={rightImage} className="h-96 w-36 object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default Banner