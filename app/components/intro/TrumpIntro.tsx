import React from 'react'
import Header from '../header/Header'

const TrumpIntro = () => {
  return (
    <div className='relative w-full h-auto max-h-auto bg-white'>
      <Header />
      <div className="relative z-10 p-6 w-full md:max-w-[780px] m-auto pt-10">
        <h1 className="text-2xl md:text-4xl font-black text-center mb-10">Limited-Time President Trump Memorabilia at Their Lowest Prices Today That You Won't Believe!</h1>
        <img src="../images/trump/header.webp" alt="" className='rounded-lg'/>
        {/* <img src="./images/1.png" alt="" className='rounded-lg'/> */}
        <p className="italic mt-5 text-center">Written by Jackson Fitzgerald | Online Deal Expert | May 30, 2025 </p>
      </div>
    </div>
  )
}

export default TrumpIntro