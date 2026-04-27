import { WHAT_I_OFFER } from '../constants/siteContent';
import useReveal from '../hooks/useReveal';
import '../styles/WhatIOffer.css';

/**
 * WhatIOffer
 * Journal / editorial layout inspired by the WhatIOffer.jpeg reference:
 *   - Large serif "Offerings" title in the top-left
 *   - Vertical list of category labels running down the bottom-left
 *   - Three cards on the right, each with: label, sub-label,
 *     B&W photograph, description text, and a "/ Book" link that
 *     opens the user's email client, pre-addressed for booking.
 */
function WhatIOfferSection() {
  const title = useReveal();
  const grid = useReveal();

  const buildBookingHref = (subject) => {
    const params = new URLSearchParams();
    if (subject) params.set('subject', subject);
    const query = params.toString();
    return `mailto:${WHAT_I_OFFER.bookingEmail}${query ? `?${query}` : ''}`;
  };

  return (
    <section className="offerings">
      {/* Left column — heading, intro, and vertical meta list */}
      <aside className="offerings-left">
        <h2
          ref={title.ref}
          className={`offerings-title ${title.className}`}
        >
          {WHAT_I_OFFER.heading}
        </h2>
        {WHAT_I_OFFER.intro && (
          <p className="offerings-intro">{WHAT_I_OFFER.intro}</p>
        )}
        <ul className="offerings-meta-list">
          {WHAT_I_OFFER.leftMeta.map((item, i) => (
            <li key={i} className="offerings-meta-item">{item}</li>
          ))}
        </ul>
      </aside>

      {/* Right column — three offering cards */}
      <div
        ref={grid.ref}
        className={`offerings-grid ${grid.className}`}
      >
        {WHAT_I_OFFER.items.map((item, i) => (
          <article key={i} className="offering-card">
            <span className="offering-label">{item.label}</span>
            <span className="offering-sublabel">{item.date}</span>
            <div className="offering-image">
              <img src={item.imageUrl} alt={item.imageAlt} loading="lazy" />
            </div>

            {item.pricing && item.pricing.length > 0 && (
              <dl className="offering-pricing">
                {WHAT_I_OFFER.pricingLabel && (
                  <dt className="offering-pricing-heading">
                    {WHAT_I_OFFER.pricingLabel}
                  </dt>
                )}
                {item.pricing.map((tier, t) => (
                  <div key={t} className="offering-pricing-row">
                    <dt className="offering-pricing-label">{tier.label}</dt>
                    <dd className="offering-pricing-price">{tier.price}</dd>
                  </div>
                ))}
              </dl>
            )}

            {item.pricingNote && (!item.pricing || item.pricing.length === 0) && (
              <p className="offering-pricing-note">{item.pricingNote}</p>
            )}

            <a
              href={buildBookingHref(item.subject)}
              className="offering-cta"
            >
              {WHAT_I_OFFER.ctaLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhatIOfferSection;
