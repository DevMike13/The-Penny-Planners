import Image from "next/image";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import OfferCard from "./components/card/OfferCard";
import Footer from "./components/footer/Footer";
import products, { Product } from "@/static/datas";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react";


export default function Home() {
  return (
    <div className="w-full h-auto">
      {/* <Header /> */}
      <Hero />
      <div className="w-[90%] md:w-full md:max-w-[780px] m-auto mt-10">
        <p className="text-lg">Looking to find the best natural supplement deals without breaking the bank? We have done the hard work for you by hunting down these absolute best online deals right now! Our team of shopping experts has uncovered these incredible products at their <span className="font-bold underline">lowest prices ever</span> – we’re talking huge discounts up to 75% off retail prices! Discover the natural solutions that have been helping thousands of Americans feel their best every day now available at a special promotional pricing for a limited time today!</p>
        <p className="italic mt-10">Written by Annabelle Harrison | Online Deal Expert April 25, 2025 </p>
      </div>
      <div className="w-[90%] md:w-full md:max-w-[780px] m-auto mt-10">
        {products.map((offer) => (
          <React.Fragment key={offer.id}>
            <hr />
            <OfferCard {...offer} />
          </React.Fragment>
        ))}
      </div>
      <div className="w-[90%] md:w-full md:max-w-[780px] m-auto my-10">
        <Accordion type="single" collapsible className="w-full max-w-[780px]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:cursor-pointer no-underline hover:no-underline data-[state=open]:text-[#93c446] text-lg md:text-xl font-bold flex items-center">What is a Personal Loan and Should You Get One?</AccordionTrigger>
            <AccordionContent>
              <div className="ml-5">
                <p className="text-base">A personal loan is a type of unsecured loan provided by financial institutions, which can be used for various personal expenses, such as debt consolidation, home renovations, medical bills, or other unexpected expenses. Since it is unsecured, you do not need to provide collateral to receive the loan. The loan amount, interest rate, and repayment terms can vary based on your creditworthiness and the lender’s policies.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:cursor-pointer no-underline hover:no-underline data-[state=open]:text-[#93c446] text-lg md:text-xl font-bold flex items-center">What is ARP?</AccordionTrigger>
            <AccordionContent>
              <div className="ml-5">
                <p className="text-base">Annual Percentage Rate (APR) is a measure of the cost of borrowing money on an annual basis, expressed as a percentage. It includes not only the interest rate but also any fees or other costs associated with the loan, providing a more comprehensive view of the true cost of the loan compared to just the nominal interest rate. Here’s a detailed explanation of APR and its components:</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:cursor-pointer no-underline hover:no-underline data-[state=open]:text-[#93c446] text-lg md:text-xl font-bold flex items-center">What is a Personal Loan and Should You Get One?</AccordionTrigger>
            <AccordionContent>
              <div className="ml-5">
                <p className="text-base">Yes. It adheres to the WAI-ARIA design pattern.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
      {/* <h1>Top 10 Outdoor Survival Essentials Every Smart Prepper Should Own</h1>
      {products.map((product: Product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      ))}
      <Accordion type="single" collapsible className="w-full max-w-[520px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
      {/* <img src="./images/article-header.png" alt="" width={100} height={200} /> */}
    </div>
  );
}
