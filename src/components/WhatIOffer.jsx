import { WHAT_I_OFFER } from '../constants/siteContent';
import useReveal from '../hooks/useReveal';
import '../styles/WhatIOffer.css';

/**
 * WhatIOffer
 * Journal / editorial layout inspired by the WhatIOffer.jpeg reference:
 *   - Large serif "Offerings" title in the top-left
 *   - Vertical list of category labels running down the bottom-left
 *   - Three cards on the right, each with: label, sub-label,
 *     B&W photograph, description text, and a "/ Read" link
 */
function WhatIOfferSection() {
  const title = useReveal();
  const grid = useReveal();

  return (
    <section className="offerings">
      {/* Left column — heading + vertical meta list */}
      <aside className="offerings-left">
        <h2
          ref={title.ref}
          className={`offerings-title ${title.className}`}
        >
          {WHAT_I_OFFER.heading}
        </h2>
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
            <p className="offering-description">{item.description}</p>
            <span className="offering-cta">{item.cta}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhatIOfferSection;
