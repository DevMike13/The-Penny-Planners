import React from 'react'

interface OtherCardProps {
  id: number;
  title: string;
  image: string;
  url: string;
}

const OtherCard: React.FC<OtherCardProps>  = ({ id, title, image, url }) => {
  return (
    <a href={url}>
      <div className='w-full md:w-[400px] h-auto p-3 shadow-md rounded-md flex flex-col gap-5'>
          <img src={image} alt="" className='rounded-md'/>
          <p className='font-semibold text-md leading-5'>
            {title}
              Unlock Rewards: Take a FREE Quick Survey and Claim a Brand New Car Emergency Kit!
          </p>
      </div>
    </a>
  )
}

export default OtherCard