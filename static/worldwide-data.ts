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
      title: '50% OFF Fraîcheur Ice Globes',
      offerId: '5182',
      image: '/images/worldwide/5182.webp',
      description: "<b>It's Time to Refresh Your Skin with Original Fraîcheur Ice Globes!</b> The easy way to improve your skin – without expensive creams or facials. Simply freeze and massage – you’ll see and feel them work quickly to reduce puffiness, fine lines & wrinkles, redness and dark circles.<br> <a href='#' target='_blank'><i><b><u>>> Available online only, Fraîcheur Ice Globes are now at the price of $26.99 vs. $53.98 retail while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SNKGRQ/B616WR7/',
    },
    {
      id: 2,
      title: "70% OFF Purisaki 2in1: Detox + Vitamin Foot Patches",
      offerId: '5180',
      image: '/images/worldwide/5180.webp',
      description: "<b>Discover the Power of 2-in-1 Detoxification with Purisaki Deep Cleansing Foot Pads!</b> Purisaki applies Asian practices passed down by centuries, reviving nature's power for a new generation. Boost your wellness with an All-Natural Japanese solution! <br> <a href='#' target='_blank'><i><b><u>>> Available online only, Purisaki Detox Patches are now at the price of $17.95 vs. $59.83 retail while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SNKGRQ/B5WF5B1/',
    },
    {
      id: 3,
      title: "50% OFF Spirual Incense Waterfall's Cone",
      offerId: '5183',
      image: '/images/worldwide/5183.webp',
      description: "<b>Spirual Incense Waterfall: Stress Therapy Tool Offers Instant Anxiety Relief with 100% Pure Essential Oils!</b> Combat stress and anxiety with the healing power of aromatherapy and the hypnotizing spectacle of Spirual's Waterfall.<br> <a href='#' target='_blank'><i><b><u>>> Available online only, Spirual Incense Waterfalls are now at the price of $19.95 vs. $39.90 retail while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SNKGRQ/B62KRHS/',
    },
    {
      id: 4,
      title: "40% OFF BioTrust Ageless Multi Collagen",
      offerId: '5355',
      image: '/images/worldwide/5355.webp',
      description: "<b>Get Back Your Natural Glow!</b> Ageless Multi-Collagen Protein Powder is a revolutionary blend of premium natural collagen that fights signs of aging and restores youthfulness to your skin, hair, and nails. <br> <a href='#' target='_blank'><i><b><u>>> Available online only, BioTrust Ageless Multi Collagen are now at the price of $39.95 vs. $49.95 retail while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SNKGRQ/BGKFQ48/',
    },
    {
      id: 5,
      title: "60% OFF The PhotoStick® OMNI",
      offerId: '5356',
      image: '/images/worldwide/5356.webp',
      description: "<b>Find & Protect ALL Your Memories In ONE Click!</b> The PhotoStick® OMNI automatically finds, sorts, and saves up to 60,000 photos and videos across all your devices with just ONE click. Don't risk losing your cherished memories! <br> <a href='#' target='_blank'><i><b><u>>> Available online only, The PhotoStick® OMNI is now at the price of $59.99 vs. $74.99 retail while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SNKGRQ/BGLSLST/',
    },
    {
      id: 6,
      title: "60% OFF Nuubu Detox Foot Patches",
      offerId: '5172',
      image: '/images/worldwide/5172.webp',
      description: "<b>Improve your body and mind with a natural Asian solution!</b> Nuubu is a revolutionary detox foot patch that can greatly increase your sense of wellbeing. Nuubu supports the body's natural way of removing toxins through activated sweat glands. <br> <a href='#' target='_blank'><i><b><u>>> Available online only, Nuubu Detox Patches are now at the price of $9.99 vs. $24.99 retail while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SNKGRQ/B5HB3F5/',
    },
    {
      id: 7,
      title: "70% OFF Akusoli Shoe Insoles",
      offerId: '5173',
      image: '/images/worldwide/5173.webp',
      description: "<b>Get Relief for Painful Feet with Magnetic Acupressure Insoles!</b> Akusoli acupressure insoles are specially designed for people who want to move more. Our insoles help to relieve tired, achy feet and stop soreness altogether. <br> <a href='#' target='_blank'><i><b><u>>> Available online only, Akusoli Shoe Insoles are now at the price of $29.99 vs. $99.97 retail while supplies last.</b></i></u></a>",
      url: 'https://www.rzmef8trk.com/5SNKGRQ/B5JNZ5Q/',
    }
];

const otherOffers: OtherOffer[] = [
  
];
  
export { products, otherOffers };
  