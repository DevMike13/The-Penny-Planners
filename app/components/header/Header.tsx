import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[100px] bg-transparent flex flex-col md:flex-row items-center justify-between px-2 md:px-20 relative z-10 max-w-screen-xl mx-auto'>
      <div className="flex items-center">

      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-lg">
        {/* <a href="/"> */}
          <img 
            src="images/logo.png" 
            alt="Logo" 
            width={220} 
            height={50} 
            className="hidden sm:block rounded-lg"
          />
          <img 
            src="images/logo.png" 
            alt="Logo" 
            width={200} 
            height={50} 
            className="block sm:hidden rounded-lg"
          />
        {/* </a> */}
      </div>
      <div className='flex items-center justify-center md:gap-5 gap-2 mt-2 md:mt-0'>
        <ul className='flex gap-10'>
            {/* <li><a href="#" className='text-sm uppercase mb-2 text-center font-semibold text-gray-500'>Advertisement</a></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Header