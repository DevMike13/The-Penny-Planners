'use client';

import { useSearchParams } from "@/node_modules/next/navigation";
import Intro from "./components/intro/Intro";
import OtherCard from "./components/card/OtherCard";
import OfferCard from "./components/card/OfferCard";
import Footer from "./components/footer/Footer";
import { Product, products, otherOffers } from "@/static/datas";
import React from "react";


export default function Home() {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <Intro />
      <div className="w-[90%] md:w-full md:max-w-[780px] m-auto mt-10">
        <p className="text-lg">Looking to find the best natural supplement deals without breaking the bank? We have done the hard work for you by hunting down these absolute best online deals right now! Our team of shopping experts has uncovered these incredible products at their <span className="font-bold underline">lowest prices ever</span> – we’re talking huge discounts up to 75% off retail prices! Discover the natural solutions that have been helping thousands of Americans feel their best every day now available at a special promotional pricing for a limited time today!</p>
      </div>
      <div className="w-[90%] md:w-full md:max-w-[780px] m-auto mt-10">
        {products.map((offer) => {
          const fullUrl = queryString ? `${offer.url}?${queryString}` : offer.url;

          return (
            <React.Fragment key={offer.id}>
              <hr />
              <OfferCard {...offer} url={fullUrl} />
            </React.Fragment>
          );
        })}
      </div>
      <div className="w-[90%] md:w-full md:max-w-[780px] m-auto mt-10">
        <hr />
        <h6 className='py-5 font-bold'>You May Also Like</h6>
        <div className='mb-10 flex justify-center items-center md:block'>
          {otherOffers.map((otherOffer) => {
            const fullUrl = queryString ? `${otherOffer.url}?${queryString}` : otherOffer.url;

            return (
              <React.Fragment key={otherOffer.id}>
                <hr />
                <OtherCard {...otherOffer} url={fullUrl} />
              </React.Fragment>
            );
          })}
        </div>
        <hr />
      </div>
      <Footer />
    </div>
  );
}
