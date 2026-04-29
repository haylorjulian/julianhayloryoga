import { LANDING } from '../constants/siteContent';
import RichText from './RichText';
import '../styles/Landing.css';

/**
 * Landing
 * Full-viewport opening section. Features a thin animated ornament,
 * a serif headline with italic emphasis, subtitle, breathing italic line,
 * and a scroll hint. The mandala background is rendered globally at the App level.
 */
function Landing() {
  return (
    <section className="landing">
      <div className="landing-ornament" aria-hidden="true" />

      <h1 className="landing-title">
        {LANDING.titleLines.map((line, i) => (
          <span key={i} className="landing-title-line">
            <RichText parts={line} />
          </span>
        ))}
      </h1>

      <p className="landing-sub">
        <span className="landing-sub-part">{LANDING.subtitleParts[0]}</span>
        <span className="landing-sub-sep" aria-hidden="true"> · </span>
        <span className="landing-sub-part">{LANDING.subtitleParts[1]}</span>
      </p>
      <p className="landing-breath">{LANDING.breath}</p>

      <div className="scroll-hint" aria-hidden="true">
        <span>{LANDING.scroll}</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Landing;
