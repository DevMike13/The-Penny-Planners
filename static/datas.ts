export interface Product {
    id: number;
    title: string;
    offerId: string;
    image: string;
    description: string;
    url: string;
}

export interface OtherOffer {
  id: number;
  title: string;
  offerName: string,
  offerId: string;
  image: string;
  url: string;
}

// description: "Let’s talk about your poop. I know, I know, not the most fascinating topic but when you’re constipated, it’s a major issue. You can feel bloated, fatigues, and uncomfortable. It’s no wonder chronic constipation is a leading cause of doctor visits.<br><br> I consult regularly with Dr. Gina Sam, considered by many in the medical field to be the world's foremost authority on 'gut motility' (which is just a fancy way of saying 'pooping speed.') And she revealed that most digestion \"remedies\" actually do more harm than good:<br><br> - Fiber feeds bacteria and parasites<br> - Laxatives actually destroy parts of the colon<br> - Probiotics are counter-productive when taken orally<br><br>Instead, her years of research uncovered a simple solution: a gut fix that I call <a href='#' target='_blank'><u><i><b>\"the instant fat flush\"</b></i></u></a>. It takes just 7 seconds in the morning and can flush out some 10 to 15 pounds of that backed-up poop in your gut. This remarkable solution has already helped over 19,000 formerly-constipated Americans restore their digestive process. <br><br> Like Michelle S., who says it's <i>\"been a godsend. It's only been 2 weeks and I'm already pooping like I did as a teenager.\"</i> <br><br> <a href='#' target='_blank'><i><b><u>>> Discover the new 7-second poop releasing ritual</u></b></i></a> <br> <br> Because the truth is, you can enjoy your favorite foods without bloating or unexplained weight gain. And it literally takes just 7 seconds. People from all over the world have chosen this go-to solution whenever they have constipation, bloating or heartburn issues. There's a good reason so many people are crediting it with giving them their life back. Check it out <a href='#' target='_blank'><b><u><i>here</i></b></u></a> today and your tummy will thank you for it! ",
// description: "Experience a one-of-a-kind adventure with <a href='#' target='_blank'><u><b><i>Amanita Muscaria Mushroom Gummies</i></b></u></a> – the market's ONLY legal psychedelic experience on the market. Made with premium Amanita Muscaria extract for a consistent and potent experience, each pack provides:<br><br> - Unique psychoactive properties for a one-of-a-kind adventure<br> - Provides enhanced intimacy and deeper connection<br> - Ease anxiety, offering a calming experience for body and mind<br> - Delicious and easy-to-consume gummy format<br><br> What does it feel like? <a href='#' target='_blank'><u><i><b>Amanita gummies have a unique effect on each person</b></i></u></a>, often resulting in a distinct experience. Commonly reported feelings include a sense of relaxation, like when you’ve had a long day and finally find a moment to unwind. It’s that feeling of sinking into a cozy chair, taking a deep breath, and feeling the tension melt away. Your mind feels lighter, and the world around you seems to slow down. People also often mention feeling more sociable, as if they’re in the company of good friends, enjoying a laid-back chat on a lazy afternoon. <br><br> <a href='#' target='_blank'><i><b><u>>> Discover why legal psychonauts everywhere are choosing Amanita Muscaria Gummies as their gateway to expanded awareness without legal concerns.</u></b></i></a> <br> <br> Tap into your creative side, brighten your mood, and ignite your imagination with every delicious bite. With fast shipping and a 30-day money-back guarantee, there’s nothing to lose and a world of relaxation to gain with Amanita Muscaria Mushroom Gummies. ",
const products: Product[] = [
    {
      id: 1,
      title: 'Emma Gut Health Supplements',
      offerId: '5139',
      image: '/images/Emma Gut Health (5139).webp',
      description: "<b>Limited Time Promo: SAVE $360 for a 6-Month Supply!</b> Emma is a gut health supplement designed to support healthy bowel movements, reduce occasional gas and bloating, and address occasional food sensitivities.<br> <a href='#' target='_blank'><i><b><u>>> Available online only, Emma Gut Heatlh Supplements are only $59/bottle vs. $99 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/B3TGX54/',
    },
    {
      id: 2,
      title: "Amanita Muscaria Mushroom Gummies",
      offerId: '4851',
      image: '/images/Magic Mushrooms (4851).webp',
      description: "<b>Limited Time Promo: $10 OFF Magic Mushroom Gummies!</b> Introducing the first-of-their-kind Amanita Muscaria Mushroom Gummies, the only legal psychedelic option on the market. Each pack contains a potent 1500mg of pure amanita muscaria extract.<br> <a href='#' target='_blank'><i><b><u>>> Available online only, subscribe and save ADDITIONAL 15% OFF!</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/9KKJH68/',
    },
    {
      id: 3,
      title: "Nuubu - Detox Foot Patches",
      offerId: '5172',
      image: '/images/Nuubu - Detox Foot Patches - WW (5172).webp',
      description: "<b>Limited Time Promo: 60% Off Detox Patches!</b> Nuubu Detox Foot Pads are natural patches worn on the feet overnight, claiming to support body detox, reduce stress, and improve sleep using herbal ingredients like bamboo vinegar and ginger.<br> <a href='#' target='_blank'><i><b><u>>> Available online only, Nuubu Detox Foot Pads are only $9.99 vs. $24.99 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/B5HB3F5/',
    },
    {
      id: 4,
      title: "Akusoli Shoe Insoles",
      offerId: '5173',
      image: '/images/Akusoli - Shoe Insoles - WW (5173).webp',
      description: "<b>Limited Time Promo: 70% Off Sole Insoles!</b> Akusoli acupressure insoles are specially designed for people who want to move more. These insoles help to relieve tired, achy feet and stop soreness altogether.<br> <a href='#' target='_blank'><i><b><u>>> Available online only, Akusoli Shoe Insoles are only $29.99 vs. $99.97 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/B5JNZ5Q/',
    },
    {
      id: 5,
      title: "Denti Strength™",
      offerId: '5354',
      image: '/images/Denti Strength™ (5354).webp',
      description: "<b>Limited Time Promo: Save $426 for a 180-Day Supply!</b> Denti Strength™ is a new \"Probiotic Candy\" that rebuilds your gums and teeth overnight! All natural, cruelty-free, non-GMO, and made in the USA. <br> <a href='#' target='_blank'><i><b><u>>> Available online only, claim your discounted Denti Strength™ at only $49/bottle vs. $69 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/BGJ2TCM/',
    },
    {
      id: 6,
      title: "Type 2 Defense",
      offerId: '5353',
      image: '/images/Type 2 Defense (5353).webp',
      description: "<b>Limited Time Promo: Save $280 for a 4-Bottle President's Pack!</b> Are you ready to control your blood sugar and discomfort in the next 90 days? This tiny \"White Flower Herb\" stabilizes blood sugar overnight! <br> <a href='#' target='_blank'><i><b><u>>> Available online only, Type 2 Defense Supplements are only $49.95/bottle vs. $69.95 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/BGGMZM2/',
    },
    {
      id: 7,
      title: "MemoShield Memory & Focus Support Formula",
      offerId: '5352',
      image: '/images/MemoShield Memory & Focus Support Formula (5352).webp',
      description: "<b>Limited Time Promo: Save $426 for a 180-Day Supply!</b> Do you want to improve your memory? Restore sharp thinking and join MemoShield VIP Membership Club to save $29.40 today and on all future shipments! <br> <a href='#' target='_blank'><i><b><u>>> Available online only, MemoShield Supplements are only $49/bottle vs. $69 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/BGF93WF/',
    },
    {
      id: 8,
      title: "RingClear Ear Ringing Formula",
      offerId: '5351',
      image: '/images/RingClear Ear Ringing Formula (5351).webp',
      description: "<b>Limited Time Promo: Save $426 for a 180-Day Supply!</b> Ready to give up those expensive tinnitus remedies that don’t work? Try RingClear's proprietary blend of all-natural ingredients sourced from around the globe and manufactured in the USA. <br> <a href='#' target='_blank'><i><b><u>>> Available online only, RingClear Supplements are only $49/bottle vs. $69 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/BGCW75S/',
    },
    {
      id: 9,
      title: "TriFlexarin Joint Comfort",
      offerId: '5197',
      image: '/images/TriFlexarin Joint Comfort (5197).webp',
      description: "<b>Limited Time Promo: Save 38% for a 6-Month Supply TriFlexarin Joint Comfort, Mobility, and Flexibility!</b> Duke University Study finds internal “Joint Repair Kit” for soothing relief in one week. Get join pain relief now with a 60-day money back guarantee! <br> <a href='#' target='_blank'><i><b><u>>> Available online only, TriFlexarin Joint Comfort is only $37.46/bottle vs. $59.99 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/B6Q25SB/',
    },
    {
      id: 10,
      title: "Advanced Nerve Support",
      offerId: '5196',
      image: '/images/Advanced Nerve Support (5196).webp',
      description: "<b>Limited Time Promo: Save 40% for a 6-Month Supply Advanced Nerve Support!</b> Tingling or numbness in your feet or hands? This gardener's secret works like \"Miracle Gro\" for your nerves! <br> <a href='#' target='_blank'><i><b><u>>> Available online only, try Advanced Nerve Support for as low as $29.96/bottle vs. $49.99 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/B6NM93P/',
    },
    {
      id: 11,
      title: "BiOptimizers Magnesium Breakthrough",
      offerId: '5195',
      image: '/images/BiOptimizers Magnesium Breakthrough (5195).webp',
      description: "<b>Limited Time Promo: 27% Off BiOptimizers Magnesium Breakthrough!</b> Magnesium supplementation has been shown to promote a healthy stress response and neurotransmitter balance. <br> <a href='#' target='_blank'><i><b><u>>> Available online only, BiOptimizers Magnesium Breakthrough is now only $29/bottle vs. $40 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/B6M8DC4/',
    },
    {
      id: 12,
      title: "Beyond Prostate: Advanced Prostate Health Formula",
      offerId: '5194',
      image: '/images/Beyond Prostate_ Advanced Prostate Health Formula (5194).webp',
      description: "<b>Limited Time Promo: Save $246 for a 180-Day Supply Beyond Prostate!</b> Support your prostate and urinary health with Beyond Prostate. Get FREE shipping on 3 and 6 bottle orders! <br> <a href='#' target='_blank'><i><b><u>>> Available online only, Beyond Prostate Advanced Prostate Health Formula is only $49/bottle vs. $69 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/B6KTHLH/',
    },
    
];

const otherOffers: OtherOffer[] = [
  {
    id: 101,
    title: 'Unlock Rewards: Take a FREE Quick Survey and Claim a Brand New Car Emergency Kit!',
    offerName: 'AAA Emergency Kit Sweeps',
    offerId: '5153',
    image: '/images/others/AAA sweeps 5153.png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/B4JX9FL/',
  },
  {
    id: 102,
    title: 'Are You 26yo or Older? Speak with a Licensed Agent Today to See If You Qualify for a $0/month plan!',
    offerName: 'Seek Health ACA',
    offerId: '5098',
    image: '/images/others/seek health aca 5098.png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/B1SJNZ7/',
  },
  {
    id: 103,
    title: 'Daily Winners: This is YOUR Chance to WIN a $500 AMEX Gift Card Today!',
    offerName: 'Everyday Winner',
    offerId: '4937',
    image: '/images/others/everyday winner amex gc 4937.png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/9PSZGGG/',
  },
  {
    id: 104,
    title: 'FREE Entry: Enter For a Chance to WIN $300,000 CASH SWEEPSTAKES Today!',
    offerName: 'LegitHotelReviews CPC',
    offerId: '5155',
    image: '/images/others/LegitHotelReviews CPC (5155).png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/B4MP2WS/',
  },
  {
    id: 105,
    title: 'Looking for $500 - $35,000 Loans from Reliable Providers? Bad Credit Accepted!',
    offerName: 'Lending Group CPC',
    offerId: '5114',
    image: '/images/others/Lending Group CPC (5114).png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/B2LQSPX/',
  },
  {
    id: 106,
    title: 'Start Your Work-From-Home Journey Today! Ready to Turn Your Dreams Into a Plan?',
    offerName: 'Work From Home MLM CPC',
    offerId: '5041',
    image: '/images/others/Work From Home MLM CPC (5041).png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/9X1DC1L/',
  },
  {
    id: 107,
    title: 'Earn Up to $100 Per Survey and Promotions with Offerwings Today!',
    offerName: 'Offerwings CPA',
    offerId: '4069',
    image: '/images/others/Offerwings CPA-new (4069).png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/86RKMMG/',
  },
  {
    id: 108,
    title: 'Find the Best Auto Insurance in Your Area at the Lowest Rate!',
    offerName: 'Dialautocoverage Inbound Insured 150 Sec',
    offerId: '5148',
    image: '/images/others/Dialautocoverage-new (5148).png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/B49ZTQK/',
  },
];
  
export { products, otherOffers };
  