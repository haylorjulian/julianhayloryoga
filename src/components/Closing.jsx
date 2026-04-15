import { CLOSING } from '../constants/siteContent';
import '../styles/Closing.css';

function Closing() {
  const currentYear = new Date().getFullYear();
  const footerText = CLOSING.footer.replace('{year}', currentYear);

  return (
    <section className="closing">
      <div className="closing__content">
        <p className="closing__statement">{CLOSING.statement}</p>

        <div className="closing__rule" aria-hidden="true" />

        <span className="closing__name">{CLOSING.name}</span>
        <span className="closing__tagline">{CLOSING.tagline}</span>

        <div className="closing__socials">
          <a
            href={CLOSING.socials.instagram.url}
            className="closing__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CLOSING.socials.instagram.handle}
          </a>
          <span className="closing__dot" aria-hidden="true">&middot;</span>
          <a
            href={CLOSING.socials.email.url}
            className="closing__link"
          >
            {CLOSING.socials.email.address}
          </a>
        </div>
      </div>

      <footer className="closing__footer">
        <span>{footerText}</span>
      </footer>
    </section>
  );
}

export default Closing;
