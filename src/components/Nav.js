import React from 'react'
import logo from './logo.png'

export default function Nav() {
  return (
    <>
    <div className='h-12 max-w-full bg-red-300 rounded-t-lg shadow-xl z-40 flex justify-between'>
       <span>
         <img className='h-12 ml-2 pt-2 font-extrabold' src={logo} alt="logo" />
      </span>
      <span className='mr-10 mt-3 cursor-pointer'>
        <i className="fa-solid fa-ellipsis-vertical"></i>
    </span>
    </div>
   
    </>
  )
}
