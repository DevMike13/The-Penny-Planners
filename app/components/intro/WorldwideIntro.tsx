import React from 'react'
import Header from '../header/Header'

const WorldwideIntro = () => {
  return (
    <div className='relative w-full h-auto max-h-auto bg-white'>
      <Header />
      <div className="relative z-10 p-6 w-full md:max-w-[780px] m-auto pt-10">
        <h1 className="text-2xl md:text-4xl font-black text-center mb-10">Limited-Time World-Wide Products at Their Lowest Prices Today That You Won't Believe!</h1>
        <img src="../images/worldwide/header.webp" alt="" className='rounded-lg'/>
        {/* <img src="./images/1.png" alt="" className='rounded-lg'/> */}
        <p className="italic mt-5 text-center">Written by Lorraine Bowen | Online Deal Expert | June 13, 2025 </p>
      </div>
    </div>
  )
}

export default WorldwideIntro