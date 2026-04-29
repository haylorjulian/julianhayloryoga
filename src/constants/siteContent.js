/**
 * Site Content Configuration
 *
 * All editable text, labels, and links live here.
 * Update this file to change any copy displayed on the site.
 *
 * For rich text with italic emphasis inside a heading, use the { em: "word" }
 * object mixed into a parts array. For a line break, use the "br" separator.
 */

export const SITE_META = {
  title: 'Julian Haylor — Hatha Yoga',
  description: 'Returning to the roots of hatha yoga. Bringing eastern principles to western practices.',
};

// ─── SECTION 1: LANDING ───
// titleLines is an array where each inner array represents a single line
// of the headline. Inside a line you can mix strings and { em: "..." }
// objects to mark italic emphasis.
//
// subtitleParts is an array of two strings rendered side-by-side on
// desktop with a separator and stacked on two lines on mobile.
export const LANDING = {
  titleLines: [
    ['Returning to'],
    ['the ', { em: 'Roots' }],
  ],
  subtitleParts: ['Traditional Hatha Yoga', 'Sivananda Lineage'],
  breath: 'Breathe in stillness',
  scroll: 'Scroll',
};

// ─── SECTION 2: ABOUT ME ───
export const ABOUT_ME = {
  topLeft: 'Hatha Yoga · Sivananda Tradition',
  topRight: 'Portfolio · 2026',
  heading: 'Julian Haylor',
  flankLeft: [
    'Teaching in the',
    'Sivananda lineage.',
    'Rooted in classical',
    'hatha yoga.',
  ],
  flankRight: [
    'Not a workout.',
    'A path inward.',
    'Breath before posture,',
    'stillness before strength.',
  ],
  imageUrl: '/images/sukhasana.png',
  imageAlt: 'Julian Haylor seated in sukhasana',
  imageCaption: 'In stillness, clarity…',
  bodyLabel: 'About the Practice',
  bodyParagraphs: [
    'My way into yoga began in pain — chronic neck tension, nerve damage, and the kind of stress that takes up residence in the body. Relief first arrived on an Iyengar mat over a decade ago, and what started as a search for comfort slowly turned into a practice I couldn’t step away from.',
    'I went on to train in hatha at Sampoorna School of Yoga in India, with a particular pull towards the traditional, Sivananda-inspired style. The classes I teach today carry that lineage — slower, alignment-led, breath at the centre. The intention is simple: to leave clearer in the head, softer in the body, and a little more at home in yourself.',
  ],
};

// ─── SECTION 3: WHAT I OFFER ───
// The CTA on each card opens the user's email client, pre-addressed
// to the bookingEmail below. Each card may include a `pricing` array
// of { label, price } tiers, and an optional `pricingNote` shown when
// the offering is bespoke (e.g. retreats).
export const WHAT_I_OFFER = {
  heading: 'Offerings',
  sectionLabel: 'Journal of Practice',
  intro: 'Anatomy-led, built around the individual. Postures are modified to keep you safe and out of injury, while the breath is used to coax the parasympathetic nervous system into rest. Yoga is an abundant toolkit — my role is to handpick what suits the body in front of me.',
  leftMeta: ['Private', 'Group', 'Immersive'],
  bookingEmail: 'haylorjulian@gmail.com',
  ctaLabel: '/ Book',
  pricingLabel: 'Pricing (1h/1.5hrs)',
  items: [
    {
      label: '/ Private',
      date: 'One-to-One',
      imageUrl: '/images/prayerhands.png',
      imageAlt: 'Hands in añjali mudra during private practice',
      description: 'One-to-one sessions across central London, hosted in the comfort of your own home. Fully personalised — built around your body, your goals, and any injuries or restrictions we need to work around. A space to refine alignment, learn to self-adjust, and develop a practice you can carry into your own time.',
      pricing: [
        { label: 'Intro session', price: '£50 / £75' },
        { label: 'Single session', price: '£80 / £120' },
        { label: 'Pack of 5', price: '£350 / £525' },
        { label: 'Pack of 10', price: '£600 / £900' },
      ],
      subject: 'Enquiry — Private Session',
    },
    {
      label: '/ Group',
      date: 'Small Groups',
      imageUrl: '/images/headshot.png',
      imageAlt: 'Julian Haylor portrait',
      description: 'Hosted from your home, available across most of London. Practise alongside friends, family, or colleagues — the same individual care as a private session, scaled to a small shared space and split across the group.',
      pricing: [
        { label: '2 people', price: '£50 / £75 each' },
        { label: '3 people', price: '£40 / £60 each' },
        { label: '4 – 6 people', price: '£30 / £45 each' },
      ],
      subject: 'Enquiry — Group Classes',
    },
    {
      label: '/ Immersive',
      date: 'Retreats & Workshops',
      imageUrl: '/images/immersion.png',
      imageAlt: 'Yoga immersion setting',
      description: 'Longer-form gatherings — a chance to step away from the everyday and spend real time with the practice. Extended holds, breathwork, philosophy, and the kind of stillness that only arrives with space. Dates and details shared on enquiry.',
      pricing: [],
      pricingNote: 'Bespoke — on enquiry',
      subject: 'Enquiry — Retreats & Workshops',
    },
  ],
};

// ─── SECTION 4: CLOSING ───
// titleParts is an array of two strings rendered side-by-side on
// desktop with a separator and stacked on two lines on mobile.
export const CLOSING = {
  sanskrit: '॥ लोकाः समस्ताः सुखिनो भवन्तु ॥',
  translation: 'May all beings everywhere be happy and free',
  name: 'Julian Haylor',
  titleParts: ['Hatha Yoga Teacher', 'Sivananda Tradition'],
  socials: [
    { label: 'Instagram', url: 'https://instagram.com/julianhayloryoga' },
    { label: 'Email', url: 'mailto:haylorjulian@gmail.com' },
  ],
  alliance: {
    imageUrl: '/images/certificate.png',
    imageAlt: 'Yoga Alliance E-RYT 200 and RYS 200 certifications',
  },
};
