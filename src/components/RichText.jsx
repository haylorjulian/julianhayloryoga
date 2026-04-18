/**
 * RichText
 * Renders an array of strings and { em } objects as a single
 * piece of rich text. Supports an optional "br" separator to
 * insert line breaks between parts.
 *
 * Example: parts={["Returning to", "the ", { em: "Roots" }]}
 */
function RichText({ parts, separator = ' ' }) {
  if (typeof parts === 'string') return parts;

  return parts.map((part, i) => {
    if (typeof part === 'string') {
      return (
        <span key={i}>
          {i > 0 && separator !== 'br' ? ' ' : ''}
          {part}
          {separator === 'br' && i < parts.length - 1 ? <br /> : ''}
        </span>
      );
    }
    if (part.em) return <em key={i}>{part.em}</em>;
    return null;
  });
}

export default RichText;
