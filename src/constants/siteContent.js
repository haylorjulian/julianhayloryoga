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
export const LANDING = {
  title: ['Returning to', 'the ', { em: 'Roots' }],
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
  imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
  imageAlt: 'Meditation at sunrise',
  imageCaption: 'In stillness, clarity\u2026',
  bodyLabel: 'About the Practice',
  bodyParagraphs: [
    'In a world where yoga has become synonymous with exercise, I invite you to step back \u2014 to rediscover the practice as it was intended. My teaching is rooted in the Sivananda tradition, honouring the classical approach to hatha yoga passed down through generations.',
    'This is yoga that asks you to slow down. To feel the breath before the posture. Each class is guided by the five principles of hatha yoga \u2014 a framework not for the body alone, but for a more conscious way of living.',
  ],
};

// ─── SECTION 3: WHAT I OFFER ───
export const WHAT_I_OFFER = {
  heading: 'Offerings',
  sectionLabel: 'Journal of Practice',
  leftMeta: ['Private', 'Group', 'Immersive'],
  items: [
    {
      label: '/ Private',
      date: 'One-to-One',
      imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80',
      imageAlt: 'Private yoga session',
      description: 'Guidance tailored to your body, breath, and intention. For beginners or those seeking a deeper, personal exploration.',
      cta: '/ Read',
    },
    {
      label: '/ Group',
      date: 'The Practice',
      imageUrl: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80',
      imageAlt: 'Group yoga practice',
      description: 'Traditional Sivananda sequences in small, intimate settings. Mantra, prāṇāyāma, sun salutations, and deep relaxation.',
      cta: '/ Read',
    },
    {
      label: '/ Immersive',
      date: 'Workshops',
      imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&q=80',
      imageAlt: 'Yoga retreat setting',
      description: 'Extended sessions on yogic philosophy, breathing, and meditation. Step away from the noise and reconnect with what matters.',
      cta: '/ Read',
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
  footer: '\u00a9 2026 \u00b7 All rights reserved',
};
