import React from 'react'

interface OtherCardProps {
  url: string;
}

const OtherCard: React.FC<OtherCardProps>  = ({ url }) => {
  return (
    <a href={url}>
      <div className='w-[400px] h-auto p-3 shadow-md rounded-md flex flex-col gap-5'>
          <img src="./images/Penny-Others.png" alt="" className='rounded-md'/>
          <p className='font-semibold text-md leading-5'>
              Unlock Rewards: Take a FREE Quick Survey and Claim a Brand New Car Emergency Kit!
          </p>
      </div>
    </a>
  )
}

export default OtherCard