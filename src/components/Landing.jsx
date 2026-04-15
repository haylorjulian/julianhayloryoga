import { LANDING } from '../constants/siteContent';
import '../styles/Landing.css';

function Landing() {
  return (
    <section className="landing">
      <div className="landing__breath-line" aria-hidden="true" />
      <div className="landing__content">
        <span className="landing__epigraph">{LANDING.epigraph}</span>
        <h1 className="landing__name">{LANDING.name}</h1>
        <span className="landing__tagline">{LANDING.tagline}</span>
        <p className="landing__subtitle">{LANDING.subtitle}</p>
      </div>
      <div className="landing__scroll-hint" aria-hidden="true">
        <span className="landing__scroll-text">scroll</span>
        <div className="landing__scroll-line" />
      </div>
    </section>
  );
}

export default Landing;
