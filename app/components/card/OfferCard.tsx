import React from 'react'

interface OfferCardProps {
    id: number;
    title: string;
    image: string;
    description: string;
    url: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ id, title , image, description, url}) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md border p-4 w-full my-10">
            <h1 className="text-xl md:text-2xl font-bold mb-5"><span className='bg-gray-600 px-3 py-1 rounded-lg text-white text-base md:text-xl'>{id}</span> {title}</h1>
            <img src={image} alt={title} className="w-full h-25 md:h-48 object-cover object-center rounded-lg" />
            <p
                className="text-base text-gray-700 mt-5"
                dangerouslySetInnerHTML={{ __html: description }}
            />
            <a
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