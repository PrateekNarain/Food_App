import React from 'react'

const Card = ({menu}) => {
  return (
    <div className='rounded-lg border border-red-500 flex flex-col items-center space-y-4 py-4 px-6 bg-orange-50 shadow-orange-500 shadow-md'>
    <img src={menu.pizza} className='w-48 cardSpin'/>
    <h2 className='text-2xl font-semibold'>{menu.name}</h2>
    <p>{menu.description}</p>
    <button className='px-3 py-2 bg-red-500 text-white rounded-lg w-full'>Order Now</button>
      
    </div>
  )
}

export default Card
 