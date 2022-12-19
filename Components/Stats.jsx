import React from 'react'

function Stats({number, stat}) {
  return (
    <div className='flex flex-col'>
        <span className='font-bold text-2xl'>{number}</span>
        <span className='font-thin text-gray-600'>{stat}</span>
    </div>
  )
}

export default Stats