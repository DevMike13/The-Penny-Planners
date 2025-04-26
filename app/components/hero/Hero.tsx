import React from 'react'
import Header from '../header/Header'

const Hero = () => {
  return (
    <div className='relative w-full h-[500px] max-h-[500px] bg-[url(/images/article-header-resized.png)] bg-cover bg-center bg-no-repeat'>
        <Header />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 p-6 text-white w-full md:max-w-[780px] m-auto pt-10">
            <h6 className="text-lg uppercase mb-2 text-center font-semibold">Advertisement</h6>
            <h1 className="text-4xl md:text-6xl font-black text-center">Limited-Time Supplements at Their Lowest Prices Today That You Won’t Believe! </h1>
        </div>
    </div>
  )
}

export default Hero