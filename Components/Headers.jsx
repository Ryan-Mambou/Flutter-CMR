import React from 'react'

function Headers({heading, paragraph}) {
  return (
    <div className='flex flex-col mt-[3rem] mb-5 items-start md:w-8/12 w-full'>
        <h2 className='text-4xl font-bold'>{heading}</h2>
        <p className='text-gray-600 font-thin mt-4'>{paragraph}</p>
    </div>
  )
}

export default Headers