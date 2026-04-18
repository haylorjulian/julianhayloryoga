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
  title: 'Julian Haylor \u2014 Hatha Yoga',
  description: 'Returning to the roots of hatha yoga. Bringing eastern principles to western practices.',
};

// ─── SECTION 1: LANDING ───
// titleLines is an array where each inner array represents a single line
// of the headline. Inside a line you can mix strings and { em: "..." }
// objects to mark italic emphasis.
export const LANDING = {
  titleLines: [
    ['Returning to'],
    ['the ', { em: 'Roots' }],
  ],
  subtitle: 'Traditional Hatha Yoga \u00b7 Sivananda Lineage',
  breath: 'Breathe in stillness',
  scroll: 'Scroll',
};

// ─── SECTION 2: ABOUT ME ───
export const ABOUT_ME = {
  topLeft: 'Hatha Yoga \u00b7 Sivananda Tradition',
  topRight: 'Portfolio \u00b7 2026',
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
  imageUrl: '/images/sukhasana-silhouette.jpg',
  imageAlt: 'Sukhasana silhouette meditation pose',
  imageCaption: 'In stillness, clarity\u2026',
  bodyLabel: 'About the Practice',
  bodyParagraphs: [
    'Trained in the classical hatha tradition at Sampoorna School of Yoga in India. The classes I teach are Sivananda-inspired, with a particular focus on alignment and attention to the self.',
    'The approach is traditional \u2014 core postures held for longer, each one guided by the breath. The aim is simple: to leave class feeling clear-headed, relaxed, and focused.',
  ],
};

// ─── SECTION 3: WHAT I OFFER ───
// The CTA on each card opens the user's email client, pre-addressed
// to the bookingEmail below.
export const WHAT_I_OFFER = {
  heading: 'Offerings',
  sectionLabel: 'Journal of Practice',
  leftMeta: ['Private', 'Group', 'Immersive'],
  bookingEmail: 'haylorjulian@gmail.com',
  ctaLabel: '/ Book',
  items: [
    {
      label: '/ Private',
      date: 'One-to-One',
      imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80',
      imageAlt: 'Private yoga session',
      description: 'Held across most of central London, hosted from the comfort of your own home. Sessions are fully personalised to your preferences and ability \u2014 a space to refine alignment and learn to adjust yourself with awareness.',
      subject: 'Enquiry \u2014 Private Session',
    },
    {
      label: '/ Group',
      date: 'The Practice',
      imageUrl: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80',
      imageAlt: 'Group yoga practice',
      description: 'Also available across most of London, hosted from your home. Practise alongside friends or family in a traditional, carefully paced sequence.',
      subject: 'Enquiry \u2014 Group Classes',
    },
    {
      label: '/ Immersive',
      date: 'Retreats & Workshops',
      imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&q=80',
      imageAlt: 'Yoga retreat setting',
      description: 'Details shared in person. Extended time away from the everyday \u2014 a chance to deepen the practice with longer holds, breathwork, and quiet reflection.',
      subject: 'Enquiry \u2014 Retreats & Workshops',
    },
  ],
};

// ─── SECTION 4: CLOSING ───
export const CLOSING = {
  sanskrit: '\u0965 \u0932\u094b\u0915\u093e\u0903 \u0938\u092e\u0938\u094d\u0924\u093e\u0903 \u0938\u0941\u0916\u093f\u0928\u094b \u092d\u0935\u0928\u094d\u0924\u0941 \u0965',
  translation: 'May all beings everywhere be happy and free',
  name: 'Julian Haylor',
  title: 'Hatha Yoga Teacher \u00b7 Sivananda Tradition',
  socials: [
    { label: 'Instagram', url: 'https://instagram.com/julianhayloryoga' },
    { label: 'Email', url: 'mailto:haylorjulian@gmail.com' },
  ],
  alliance: {
    imageUrl: '/images/yogaAllianceTransparent.png',
    imageAlt: 'Yoga Alliance E-RYT 200 and RYS 200 certifications',
  },
};
