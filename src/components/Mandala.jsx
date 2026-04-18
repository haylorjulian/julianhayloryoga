/**
 * Mandala
 * A decorative SVG used as a subtle background ornament on the landing page.
 * Rotates slowly via CSS animation. Presentational only.
 */
function Mandala() {
  const outerPetals = Array.from({ length: 12 }, (_, i) => i * 30);
  const innerPetals = Array.from({ length: 12 }, (_, i) => 15 + i * 30);
  const circleRadii = [60, 90, 120, 150, 180];

  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" strokeWidth="0.5">
        {circleRadii.map((r) => (
          <circle key={r} cx="200" cy="200" r={r} />
        ))}
        <g>
          {outerPetals.map((angle) => (
            <ellipse
              key={`outer-${angle}`}
              cx="200"
              cy="140"
              rx="18"
              ry="50"
              transform={`rotate(${angle} 200 200)`}
            />
          ))}
        </g>
        <g>
          {innerPetals.map((angle) => (
            <ellipse
              key={`inner-${angle}`}
              cx="200"
              cy="110"
              rx="12"
              ry="70"
              transform={`rotate(${angle} 200 200)`}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

export default Mandala;
