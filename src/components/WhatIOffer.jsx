import { WHAT_I_OFFER } from '../constants/siteContent';
import '../styles/WhatIOffer.css';

function WhatIOffer() {
  return (
    <section className="offerings">
      {/* Warm upper area with heading */}
      <div className="offerings__top">
        <span className="offerings__label">{WHAT_I_OFFER.sectionLabel}</span>
        <h2 className="offerings__heading">{WHAT_I_OFFER.heading}</h2>
      </div>

      {/* Dark lower area with columns */}
      <div className="offerings__grid">
        {WHAT_I_OFFER.items.map((item, index) => (
          <div key={index} className="offerings__card">
            <span className="offerings__card-label">{item.label}</span>
            <div className="offerings__card-divider" aria-hidden="true" />
            <h3 className="offerings__card-title">{item.title}</h3>
            <p className="offerings__card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatIOffer;
