import { ABOUT_ME } from '../constants/siteContent';
import useReveal from '../hooks/useReveal';
import '../styles/AboutMe.css';

/**
 * AboutMe
 * Editorial-magazine layout inspired by the AboutMe.jpeg reference:
 *   - Corner meta labels (top-left / top-right)
 *   - Large centered serif heading
 *   - Centered photograph flanked by small-caps side text
 *   - Italic caption
 *   - "About the practice" label
 *   - Centered body paragraphs
 */
function AboutMe() {
  const heading = useReveal();
  const imageArea = useReveal();
  const body = useReveal();

  return (
    <section className="about">
      {/* Top corner meta */}
      <div className="about-meta-top">
        <span className="about-meta about-meta-left">{ABOUT_ME.topLeft}</span>
        <span className="about-meta about-meta-right">{ABOUT_ME.topRight}</span>
      </div>

      {/* Centred editorial heading */}
      <h2
        ref={heading.ref}
        className={`about-heading ${heading.className}`}
      >
        {ABOUT_ME.heading}
      </h2>

      {/* Photograph with left and right flanking text */}
      <div
        ref={imageArea.ref}
        className={`about-hero ${imageArea.className}`}
      >
        <div className="about-flank about-flank-left">
          {ABOUT_ME.flankLeft.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </div>

        <div className="about-image">
          <img
            src={ABOUT_ME.imageUrl}
            alt={ABOUT_ME.imageAlt}
            loading="lazy"
          />
        </div>

        <div className="about-flank about-flank-right">
          {ABOUT_ME.flankRight.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>

      <p className="about-caption">{ABOUT_ME.imageCaption}</p>

      {/* Body label + paragraphs */}
      <div
        ref={body.ref}
        className={`about-body ${body.className}`}
      >
        <span className="about-body-label">{ABOUT_ME.bodyLabel}</span>
        {ABOUT_ME.bodyParagraphs.map((p, i) => (
          <p key={i} className="about-body-paragraph">{p}</p>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
