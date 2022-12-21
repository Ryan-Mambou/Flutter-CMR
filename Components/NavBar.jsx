import React from 'react'
import flutterImg from '../public/images/9.svg'
import loopImg from '../public/images/29.svg'
import Image from 'next/image'

function NavBar({navLinks}) {
  return (
    <div className='flex justify-between items-center py-3 md:px-10 px-4 text-lg border-b-[0.05rem] fixed z-20 bg-white w-full'>
        <Image src={flutterImg} alt="flutter-cmr Icon cursor-pointer"/>
        <div className='md:flex md:justify-between md:items-center hidden'>
            <ul className='flex'>
               {navLinks.map((link, index) => (
                <li key={index} className="px-2 cursor-pointer hover:text-green-900">{link}</li>
               ))}
            </ul>
            <div className='cursor-pointer ml-2 bg-green-100 rounded-3xl p-2 flex justify-center items-center'>
                <Image src={loopImg} alt="loop-icon"/>
                </div>
            <button className='bg-green-700 text-white rounded-md py-1 px-5 ml-5 cursor-pointer'>Login</button>
            <button className='border-white border-2 text-green-900 hover:border-green-700 hover:bg-gray-100 rounded-md py-1 px-5 ml-2 cursor-pointer transition-all duration-150 ease-linear'>Sign up</button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:hidden text-xl">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
    </div>
  )
}

export default NavBar