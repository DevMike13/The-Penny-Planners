'use client';
import { useSearchParams } from '@/node_modules/next/navigation';
import OfferCard from "../card/OfferCard";
import OtherCard from "../card/OtherCard";
import { products, otherOffers } from "@/static/trump-data";
import React from "react";

const TrumpParamsContent = () => {
    const searchParams = useSearchParams();
    const queryString = searchParams.toString();

  return (
    <>
      <div className="w-[90%] md:w-full md:max-w-[780px] m-auto mt-10">
        <p className="text-lg">
            Looking to find the best President Trump Memorabilia deals without breaking the bank? We have done the hard work for you by hunting down these absolute best online deals right now! Our team of shopping experts has uncovered these incredible products at their
          <span className="font-bold underline"> lowest prices ever</span> – we’re talking huge discounts up to 70% off retail prices!
        </p>
      </div>

      <div className="w-[90%] md:w-full md:max-w-[780px] m-auto mt-10">
        {products.map((offer) => {
          const fullUrl = offer.url.includes('?')
            ? `${offer.url}&${queryString}`
            : `${offer.url}?${queryString}`;

          return (
            <React.Fragment key={offer.id}>
              <hr />
              <OfferCard {...offer} url={fullUrl} description={offer.description.replace("href='#'", `href='${fullUrl}'`)} />
            </React.Fragment>
          );
        })}
      </div>

      <div className="w-[90%] md:w-full md:max-w-[780px] m-auto mt-10">
        <hr />
        <h6 className='py-5 font-bold'>You May Also Like</h6>
        <div className='mb-10 flex-col justify-center items-center md:grid md:grid-cols-3 md:gap-4'>
          {otherOffers.map((otherOffer) => {
            const fullUrl = otherOffer.url.includes('?')
              ? `${otherOffer.url}&${queryString}`
              : `${otherOffer.url}?${queryString}`;

            return (
              <OtherCard {...otherOffer} url={fullUrl} key={otherOffer.id} />
            );
          })}
        </div>
        <hr />
      </div>
    </>
  )
}

export default TrumpParamsContent