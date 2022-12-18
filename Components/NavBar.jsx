import React from 'react'
import flutterImg from '../public/images/9.svg'
import loopImg from '../public/images/29.svg'
import Image from 'next/image'

function NavBar({navLinks}) {
  return (
    <div className='flex justify-between py-3 px-10 text-lg border-b-[0.1rem]'>
        <Image src={flutterImg} alt="flutter-cmr Icon cursor-pointer"/>
        <div className='flex justify-between items-center'>
            <ul className='flex'>
               {navLinks.map((link, index) => (
                <li key={index} className="px-2 cursor-pointer">{link}</li>
               ))}
            </ul>
            <div className='cursor-pointer ml-2 bg-green-100 rounded-3xl p-2 flex justify-center items-center'>
                <Image src={loopImg} alt="loop-icon"/>
                </div>
            <button className='bg-green-700 text-white rounded-md py-2 px-5 border 2 ml-5 cursor-pointer'>Login</button>
            <button className='border-white border-2 text-green-900 hover:border-green-700 hover:bg-gray-100 rounded-md py-2 px-5 ml-2 cursor-pointer'>Sign up</button>
        </div>
    </div>
  )
}

export default NavBar