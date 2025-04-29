import React from 'react'
import OtherCard from '../card/OtherCard'

const Others = () => {
  return (
    <div className="w-[90%] md:w-full md:max-w-[780px] m-auto mt-10">
        <hr />
        <h6 className='py-5 font-bold'>You May Also Like</h6>
        <div className='mb-10 flex justify-center items-center md:block'>
            <OtherCard />
        </div>
        <hr />
    </div>
  )
}

export default Others