import { CLOSING } from '../constants/siteContent';
import useReveal from '../hooks/useReveal';
import '../styles/Closing.css';

/**
 * Closing
 * Final section — Sanskrit mantra, translation, name, title,
 * and social links. Content fades in on scroll.
 */
function Closing() {
  const sanskrit = useReveal();
  const translation = useReveal();
  const name = useReveal();
  const title = useReveal();
  const socials = useReveal();

  return (
    <section className="closing">
      <div
        ref={sanskrit.ref}
        className={`closing-sanskrit ${sanskrit.className}`}
      >
        {CLOSING.sanskrit}
      </div>

      <div
        ref={translation.ref}
        className={`closing-translation ${translation.className}`}
      >
        {CLOSING.translation}
      </div>

      <div
        ref={name.ref}
        className={`closing-name ${name.className}`}
      >
        {CLOSING.name}
      </div>

      <div
        ref={title.ref}
        className={`closing-title ${title.className}`}
      >
        {CLOSING.title}
      </div>

      <div
        ref={socials.ref}
        className={`socials ${socials.className}`}
      >
        {CLOSING.socials.map((social, i) => (
          <a
            key={i}
            href={social.url}
            className="social-link"
            target={social.url.startsWith('http') ? '_blank' : undefined}
            rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {social.label}
          </a>
        ))}
      </div>

      <div className="closing-footer">{CLOSING.footer}</div>
    </section>
  );
}

export default Closing;
