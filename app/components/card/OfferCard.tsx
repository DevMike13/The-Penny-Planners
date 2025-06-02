'use client'
import React from 'react'

interface OfferCardProps {
    id: number;
    title: string;
    offerId: string;
    image: string;
    description: string;
    url: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ id, title, offerId , image, description, url}) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md border p-4 w-full my-10">
            <h1 className="text-xl md:text-2xl font-bold mb-5"><span className='bg-gray-600 px-2.5 md:px-3 py-1 rounded-lg text-white text-base md:text-xl'>{id}</span> {title}</h1>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={image} alt={title} className="w-full h-20 lg:h-46 md:h-43.5 md:object-cover object-contain object-center rounded-lg" />
            </a>
            <p
                className="text-base text-gray-700 mt-5"
                dangerouslySetInnerHTML={{ __html: description }}
            />
            <a
                id={offerId}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-white text-center hover:bg-[#f60707] font-medium w-full bg-[#db2828] py-2 uppercase rounded-md shadow-lg hover:shadow-none"
            >
                Click here to learn more
            </a>
        </div>
    )
}

export default OfferCard