import React from 'react'
import Image from 'next/image'
import topImage from '../public/images/2.jpeg'
import bottomImage from '../public/images/3.jpeg'
import leftImage from '../public/images/1.jpeg'
import rightImage from '../public/images/4.jpeg'
import backgroundSvg from '../public/images/6.svg'
import Stats from './Stats'
import Slider from './Slider'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Banner() {

    const carouselImages = [topImage, bottomImage, leftImage, rightImage]

    const options = {
        arrows: false,
            autoplay: true,
            interval: '2000',
        rewind: 'true'
  };


  return (
    <div className='md:px-10 sm:px-4 px-2 flex sm:flex-row flex-col-reverse gap:10 sm:gap-30'>
        <Image src={backgroundSvg} className="absolute right-0 -z-10"/>
        <div className="flex flex-col md:pt-[14rem] z-10 md:justify-between gap-5">
        <div className='flex flex-col gap-4'>
            <h1 className='font-bold sm:text-6xl text-4xl animate-fadeDown'>A community open to everyone</h1>
            <p className='sm:text-xl text-gray-600 text-[1.2rem] animate-zoom'>Flutter Cameroon is an initiative to focus the efforts of many developers in and around Cameroon to learn, share and become productive using Flutter.</p>
            <div className='flex sm:flex-row flex-col animate-fadeUp gap-2'>
                <button className='bg-green-700 text-white rounded-md py-1 px-5 border 2 cursor-pointer hover:opacity-[0.8]'>Join the 237 community</button>
                <button className='border-2 text-green-900 border-green-700 hover:bg-gray-100 rounded-md py-1 px-5 cursor-pointer'>Visit forum</button>
                </div>
            </div>

            <div className='flex gap-16'>
                <Stats stat="Members on Meetup" number="106k"/>
                <Stats stat="Stars on GitHub" number="127k"/>
                <Stats stat="Followers on Twitter" number="151.4k"/>
            </div>
        </div>
        
        <div>
          <Splide options={options}
           className='sm:hidden mt-[5rem] mb-5 rounded-3xl h-[20rem]'>
           {carouselImages.map( ( slide, index ) => (
              <SplideSlide key={ index }>
                <Image src={ slide } alt="carousel images" className='rounded-3xl h-[20rem] object-cover'/>
              </SplideSlide>
            ) ) }
          </Splide>
        </div>

            <div className='lg:flex lg:items-center lg:gap-2 z-10 hidden shrink-0'>
                <Image src={leftImage} className="full-rounded-image animate-fadeLeft" alt="image"/>
                <div className='flex flex-col w-36 gap-2'>
                <Image src={topImage} className="full-rounded-image w-36 animate-fadeDown" alt="image"/>
                <Image src={bottomImage} className="full-rounded-image animate-fadeUp" alt="image"/>
                </div>
                <Image src={rightImage} className="full-rounded-image animate-fadeRight" alt="image"/>
            </div>
    </div>
  )
}

export default Banner