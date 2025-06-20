import React from 'react'
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Footer = () => {
  return (
    <div className='w-full bg-[#282828] py-8 px-6 md:px-14 flex flex-col gap-2'>
      <div className='w-full flex flex-col justify-center items-center gap-5'>
        <h6 className='text-white font-semibold text-xl text-center'>Copyright 2025 - The Penny Planners</h6>
        <div>
          <ul className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10'>
            <li>
              <Link href="/terms-&-conditions" className='text-blue-300 underline' target="_blank">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className='text-blue-300 underline' target="_blank">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/about" className='text-blue-300 underline' target="_blank">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <p className='text-white text-md'>THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE.</p>
        <p className='text-white text-md text-center'>ThePennyPlanners.com is a website where we help users find the best deals online. All of the offers and promotions shown on the site are custom curated for selected users only. To contact us, please email us at <a href="mailto:support@thepennyplanners.com">support@thepennyplanners.com</a></p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:cursor-pointer no-underline hover:no-underline text-sm text-white data-[state=open]:text-[#93c446] text-lg md:text-sm font-bold flex items-center">Marketing Disclaimer: </AccordionTrigger>
          <AccordionContent>
            <div className="ml-5">
              <p className='text-white text-sm'><b>THIS IS AN ADVERTISEMENT AND MAY NOT BE CONSIDERED AN ACTUAL PRODUCT REVIEW, PRICE COMPARISON, OR CONSUMER SHOPPING GUIDE.</b> Our website serves as an independent platform for promoting discount e-commerce offers and shall not be considered a professional shopping advisor, deal expert, or consumer advocate. This site provides informational content about sales, discounts, and promotional offers that may expire or change without notice. We recommend verifying all pricing and promotional details directly with the retailer before making a purchase.</p>
              <p className='text-white text-sm mt-2'>The content you're reading is designed in the style of a shopping guide or deal alert. Our company <b>MAY RECEIVE MONETARY COMPENSATION FOR CLICKS, PURCHASES, OR AFFILIATE COMMISSIONS MADE THROUGH THE DISCOUNT OFFERS AND PROMOTIONAL LINKS SHARED ON THIS PAGE.</b> We are an independent promotional platform offering comparative insights on various discount offers, flash sales, and promotional codes. The product images shown are for illustrative purposes and may not always represent the exact item on sale. Our rankings and recommendations of discount offers are based on factors including discount percentage, product value, shipping costs, limited-time availability, and financial compensation received from retailers. </p>
              <p className='text-white text-sm mt-2'>Links to discount offers found on our website are provided by third-party e-commerce retailers who pay us compensation. This compensation may influence which discount offers appear on our site, including the prominence and order in which they are displayed. We receive no fees from you for accessing these discounts. We do not represent all available discount offers or promotional codes in the marketplace. </p>
              <p className='text-white text-sm mt-2'>Discount prices, promotional codes, and special offers may vary by region, timing, and availability, with retailers having their own qualifications and limitations. We do not guarantee that you will receive the advertised discount, as prices and promotions are subject to change. Limited quantities may apply, and some offers may expire before they can be redeemed. Information shared when clicking on discount offers will be passed to the retailers. Some offers may involve subscription services with recurring payments until canceled. Under such arrangements, you'll incur regular charges until you opt to cancel. </p>
              <p className='text-white text-sm mt-2'>All opinions about discount offers expressed on this website are solely our own and have not been reviewed, approved, or otherwise endorsed by our retail partners. We maintain no affiliation with any e-commerce retailer except as explicitly disclosed. We do not guarantee the quality of discounted products or services. </p>
              <p className='text-white text-sm mt-2'>By clicking on any discount link or promotional code, you will be redirected to a third-party retailer's website. Please review their terms, return policies, and privacy policy, as they may differ substantially from ours. Your purchasing transactions are subject to the retailer's policies and procedures, not ours. </p>
              <p className='text-white text-sm mt-2'>Trademarks and product names featured on our website are the property of their respective owners. While we strive for accuracy regarding discount information, all pricing and promotional details available on this site are provided as is and subject to change without notice. We disclaim all warranties related to the accuracy of discount information presented. </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Footer