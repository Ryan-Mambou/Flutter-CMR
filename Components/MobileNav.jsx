import React from 'react'
import loopImg from '../public/images/29.svg'
import Image from 'next/image';

function MobileNav({navLinks, toggleMobileNav, showMobileNav}) {
    
  return (
    <div className={``}>
        <div className={`w-full h-full bg-black bg-opacity-30 fixed z-30 transition-all duration-150 ease-in ${ showMobileNav ? 'flex' : 'hidden'}`}></div>
        <div className={`w-80 h-full bg-white z-50 transition-all duration-200 ease-in fixed right-0 translate-x-full ${showMobileNav ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-row justify-end gap-2 items-center border-b-[0.05rem] py-4'>
        <div className='cursor-pointer ml-2 bg-green-100 rounded-3xl p-2 flex justify-center items-center'>
                <Image src={loopImg} alt="loop-icon"/>
                </div>
                <svg onClick={() => toggleMobileNav()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

        </div>
        <div className='flex flex-col gap-4 pt-2'>
        <ul className='flex flex-col items-center gap-4'>
               {navLinks.map((link, index) => (
                <li key={index} className="px-2 cursor-pointer hover:text-green-900">{link}</li>
               ))}
            </ul>
            <div className='flex flex-col gap-4 px-2'>
            <button className='bg-green-700 text-white rounded-md py-1 px-5 cursor-pointer hover:bg-opacity-80'>Login</button>
            <button className='border-2 text-green-900 hover:bg-green-100 border-green-700 rounded-md py-1 px-5 cursor-pointer transition-all duration-150 ease-linear'>Sign up</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MobileNav