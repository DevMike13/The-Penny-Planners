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
      image: '/images/1.png',
      description: "<b>Limited Time Promo: SAVE $360 for a 6-Month Supply!</b> Emma is a gut health supplement designed to support healthy bowel movements, reduce occasional gas and bloating, and address occasional food sensitivities.<br> <a href='#' target='_blank'><i><b><u>>> Available online only, Emma Gut Heatlh Supplements are only $59/bottle vs. $99 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/B3TGX54/',
    },
    {
      id: 2,
      title: "Amanita Muscaria Mushroom Gummies",
      offerId: '4851',
      image: '/images/2.png',
      description: "<b>Limited Time Promo: $10 OFF Magic Mushroom Gummies!</b> Introducing the first-of-their-kind Amanita Muscaria Mushroom Gummies, the only legal psychedelic option on the market. Each pack contains a potent 1500mg of pure amanita muscaria extract.<br> <a href='#' target='_blank'><i><b><u>>> Available online only, subscribe and save ADDITIONAL 15% OFF!</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/9KKJH68/',
    },
    {
      id: 3,
      title: "Nuubu - Detox Foot Patches",
      offerId: '5172',
      image: '/images/3.png',
      description: "<b>Limited Time Promo: 60% Off Detox Patches!</b> Nuubu Detox Foot Pads are natural patches worn on the feet overnight, claiming to support body detox, reduce stress, and improve sleep using herbal ingredients like bamboo vinegar and ginger.<br> <a href='#' target='_blank'><i><b><u>>> Available online only, Nuubu Detox Foot Pads are only $9.99 vs. $24.99 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/B5HB3F5/',
    },
    {
      id: 4,
      title: "Akusoli Shoe Insoles",
      offerId: '5173',
      image: '/images/4.png',
      description: "<b>Limited Time Promo: 70% Off Sole Insoles!</b> Akusoli acupressure insoles are specially designed for people who want to move more. These insoles help to relieve tired, achy feet and stop soreness altogether.<br> <a href='#' target='_blank'><i><b><u>>> Available online only, Akusoli Shoe Insoles are only $29.99 vs. $99.97 retail - while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SHH4C2/B5JNZ5Q/',
    },
    // {
    //   id: 5,
    //   title: "Semaglutide Weight Loss",
    //   image: '/images/5.png',
    //   description: "<b>Limited Time Promo: Get Compounded Semaglutide for only $148!</b> Semaglutide is a pharmaceutical ingredient known for its efficacy in effective weight management and has the same active ingredient as Ozempic® & Wegovy® <br> <a href='#' target='_blank'><i><b><u>>> Available online only, experience an average of 14.9% weight loss with Compounded Semaglutide for only $148 - while supplies last.</b></i></u></a>",
    //   url: 'https://www.rzmef8trk.com/28KL6/B65CK12/',
    // },
    // {
    //   id: 6,
    //   title: "Glutathione Injections Skin Glow",
    //   image: '/images/6.png',
    //   description: "<b>Limited Time Promo: Get Glutathione Injections for only $99!</b> Find out why your favorite celebrities use Glutathione to make their skin look its best. Glutathione, often referred to as ‘the master antioxidant,’ aids the body in detoxifying from the impacts of aging and stress. <br> <a href='#' target='_blank'><i><b><u>>> Available online only, experience glowing skin in 2-4 weeks with Glutathione Injections for only $99 - while supplies last.</b></i></u></a>",
    //   url: 'https://www.rzmef8trk.com/28KL6/B69J76T/',
    // },
    // {
    //   id: 7,
    //   title: "Tadalafil Generic Cialis®",
    //   image: '/images/7.png',
    //   description: "<b>Limited Time Promo: Daily Dose as Low as $1 per Use!</b> Tadalafil is a proven ED treatment that improves blood flow, helping you achieve and maintain an erection while boosting confidence. <br> <a href='#' target='_blank'><i><b><u>>> Available online only, Tadalafil is FDA-Approved and 95% cheaper than retail - while supplies last.</b></i></u></a>",
    //   url: 'https://www.rzmef8trk.com/28KL6/B685BG8/',
    // },
    // {
    //   id: 8,
    //   title: "Sildenafil Generic Viagra®",
    //   image: '/images/8.png',
    //   description: "<b>Limited Time Promo:</b> Sildenafil is a proven ED treatment that improves blood flow, helping you achieve and maintain an erection while boosting confidence. <br> <a href='#' target='_blank'><i><b><u>>> Available online only, Sildenafil is FDA-Approved and 95% cheaper than retail - while supplies last.</b></i></u></a>",
    //   url: 'https://www.rzmef8trk.com/28KL6/B66QFPM/',
    // },
];

const otherOffers: OtherOffer[] = [
  {
    id: 101,
    title: 'Unlock Rewards: Take a FREE Quick Survey and Claim a Brand New Car Emergency Kit!',
    offerId: '5153',
    image: '/images/Penny-Others.png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/B4JX9FL/',
  },
  {
    id: 102,
    title: 'Are You 26yo or Older? Speak with a Licensed Agent Today to See If You Qualify for a $0/month plan!',
    offerId: '5098',
    image: '/images/seek-healt-aca-5098.png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/B1SJNZ7/',
  },
  {
    id: 103,
    title: 'Winners Picked Daily: This is YOUR Chance to WIN a $500 American Express Gift Card Today!',
    offerId: '4937',
    image: '/images/everyday-winner-amex-gc-4937.png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/9PSZGGG/',
  },
  {
    id: 104,
    title: 'Special Rewards: Claim Your FREE Entry Today to WIN a $500 Gift Card Delivered to Your Door!',
    offerId: '5035',
    image: '/images/blissful-daily-5035.png',
    url: 'https://www.rzmef8trk.com/5SHH4C2/9WP32KZ/',
  }
];
  
export { products, otherOffers };
  