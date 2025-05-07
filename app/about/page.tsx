import React from 'react'

const page = () => {
  return (
    <div className='bg-white w-full h-auto flex justify-center items-center flex-col'>
      <div className='w-full h-[100px] bg-transparent flex flex-col md:flex-row items-center justify-between px-2 md:px-20 relative z-10 max-w-screen-xl mx-auto'>
        <div className="flex items-center">

        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-lg">
          {/* <a href="/"> */}
            <img 
              src="../images/logo.png" 
              alt="Logo" 
              width={220} 
              height={50} 
              className="hidden sm:block rounded-lg"
            />
            <img 
              src="../images/logo.png" 
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
      <div className='p-6 w-full md:max-w-[780px] m-auto pt-10'>
        <h1 className="text-2xl md:text-4xl font-black text-center mb-10">About Us</h1>
        <p className='text-center'>
            <b>ThePennyPlanners.com</b> is a website where we help users find the best deals online. All of the offers and promotions shown on the site are custom curated for selected users only. To contact us, please email us at <a href="mailto:support@revenueclickmedia.com" className='text-blue-500 underline'>support@revenueclickmedia.com</a>
        </p><br />
        <p className='text-center'>1440 W. Taylor St # 1025</p>
        <p className='text-center'>Chicago, IL 60607</p>
        <p className='text-center'>United States</p>
      </div>
    </div>
  )
}

export default page