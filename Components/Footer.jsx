import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='w-full flex flex-wrap flex-row justify-between gap-5 md:gap-0 p-6 bg-gray-100'>
        <div className='flex flex-col gap-3 basis-1/4'>
        <h5 className='text-xl font-medium'>Resources</h5>
        <ul className='text-gray-600'>
            <li><Link href="#">Become a sponsor</Link></li>
            <li><Link href="#">Call for Speakers</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Podcast</Link></li>
            <li><Link href="#">Jobs</Link></li>
            <li><Link href="#">Branding</Link></li>
        </ul>
        <div className='flex flex-col gap-4 items-start'>
            <button className='text-white bg-black hover:opacity-[0.8] rounded-lg py-2 px-5'>English</button>
            <div className='flex gap-2'>
            <button className='rounded-lg py-2 px-5 bg-white hover:border-gray-400 border-2'>Slack</button>
            <button className='rounded-lg py-2 px-5 bg-white hover:border-gray-400 border-2'>Telegram</button>
            </div>
        </div>
        </div>
        <div className='flex flex-col gap-3 basis-1/4'>
        <h5 className='text-xl font-medium'>Learn Flutter</h5>
        <ul className='text-gray-600'>
            <li><Link href="">Learning of journey</Link></li>
            <li><Link href="">Codelabs</Link></li>
            <li><Link href="">Samples</Link></li>
        </ul>
        </div>
        <div className='flex flex-col gap-3 basis-1/4'>
        <h5 className='text-xl font-medium'>Legal</h5>
        <ul className='text-gray-600'>
            <li><Link href="">Teams and services</Link></li>
            <li><Link href="">Code of conduct</Link></li>
            <li><Link href="">FAQ</Link></li>
        </ul>
        </div>
        <div className='flex flex-col gap-3 items-start basis-1/4'>
        <h5 className='text-xl font-medium'>Learn Flutter</h5>
        <span className='text-gray-600'>Join our newsletter to receive tutorials, articles and podcasts on web design and programming.</span>
        <div className='flex sm:flex-row flex-col gap-2 sm:items-center'>
            <input type="text" className='rounded-lg py-2 px-4 border-gray-400 border-2 focus:outline-green-700 transiton ease-linear duration-150 text-gray-500 font-semibold shrink-1' placeholder='Your email address' />
            <button type='submit' className='whitespace-nowrap rounded-lg py-2 px-4 z-10 cursor-pointer bg-green-700 text-white hover:opacity-[0.8] transition-all ease-linear'>Sign up</button>
        </div>
        </div>
    </div>
  )
}

export default Footer