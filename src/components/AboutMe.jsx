import { ABOUT_ME } from '../constants/siteContent';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <section className="about">
      {/* Top editorial header area */}
      <div className="about__header">
        <span className="about__label">{ABOUT_ME.sectionLabel}</span>
        <h2 className="about__heading">{ABOUT_ME.heading}</h2>
        <div className="about__rule" aria-hidden="true" />
        <span className="about__caption">{ABOUT_ME.caption}</span>
      </div>

      {/* Body text — flowing paragraphs */}
      <div className="about__body">
        {ABOUT_ME.paragraphs.map((paragraph, index) => (
          <p key={index} className="about__paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Certifications */}
      <div className="about__certifications">
        <span className="about__cert-label">{ABOUT_ME.certifications.label}</span>
        <img
          src={ABOUT_ME.certifications.image}
          alt={ABOUT_ME.certifications.alt}
          className="about__cert-image"
        />
      </div>
    </section>
  );
}

export default AboutMe;
