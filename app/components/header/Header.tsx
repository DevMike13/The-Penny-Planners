import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[90px] bg-transparent flex items-center justify-center px-2 md:px-20 relative z-10'>
      <div>
        <a href="/">
          <img src="images/logo.png" alt="Logo" width={250} height={50} className='hidden sm:block' />
          <img src="images/logo.png" alt="Logo" width={200} height={50} className='block sm:hidden' />
          {/* <img src="images/TPP-logo-M.png" alt="Logo" width={50} height={50} className='block sm:hidden' /> */}
        </a>
      </div>
      {/* <div className='flex items-center justify-center md:gap-5 gap-2'>
        <ul className='flex gap-10'>
            <li><a href="#" className='text-white font-semibold'>Home</a></li>
            <li><a href="#" className='text-white font-semibold'>About</a></li>
        </ul>
      </div> */}
    </div>
  )
}

export default Header