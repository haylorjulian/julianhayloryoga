import { LANDING } from '../constants/siteContent';
import Mandala from './Mandala';
import RichText from './RichText';
import '../styles/Landing.css';

/**
 * Landing
 * Full-viewport opening section. Features a slowly rotating mandala
 * background, a thin animated ornament, a serif headline with italic
 * emphasis, subtitle, breathing italic line, and a scroll hint.
 */
function Landing() {
  return (
    <section className="landing">
      <div className="mandala" aria-hidden="true">
        <Mandala />
      </div>

      <div className="landing-ornament" aria-hidden="true" />

      <h1 className="landing-title">
        {LANDING.titleLines.map((line, i) => (
          <span key={i} className="landing-title-line">
            <RichText parts={line} />
          </span>
        ))}
      </h1>

      <p className="landing-sub">{LANDING.subtitle}</p>
      <p className="landing-breath">{LANDING.breath}</p>

      <div className="scroll-hint" aria-hidden="true">
        <span>{LANDING.scroll}</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Landing;
