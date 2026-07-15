import { useState } from 'react';
import EgoDeath from './EgoDeath';
import Mandala from './Mandala';
import '../styles/EgoDeath.css';

const PASSWORD = 'deathwithintention';
const SESSION_KEY = 'egodeath-unlocked';

/**
 * EgoDeathGate
 * A soft, client-side password gate for the /egodeath guide. Note this is
 * NOT real security — the passphrase and content ship in the JS bundle — it
 * simply keeps the page away from casual visitors. Once unlocked, the state
 * is kept in sessionStorage so a refresh within the session doesn't re-prompt.
 */
function EgoDeathGate() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === 'true',
  );
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setUnlocked(true);
    } else {
      setError('That’s not it. Try again.');
      setValue('');
    }
  };

  if (unlocked) return <EgoDeath />;

  return (
    <div className="egodeath-gate">
      <div className="mandala-global" aria-hidden="true">
        <Mandala />
      </div>
      <div className="egodeath-gate-card">
        <p className="egodeath-gate-label">Private</p>
        <h1 className="egodeath-gate-title">Enter with intention</h1>
        <p className="egodeath-gate-hint">
          This is a sacred space. Offer the password to enter.
        </p>
        <form className="egodeath-gate-form" onSubmit={handleSubmit}>
          <input
            className="egodeath-gate-input"
            type="password"
            placeholder="Password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError('');
            }}
            autoFocus
            autoComplete="off"
            aria-label="Password"
          />
          <button className="egodeath-gate-button" type="submit">
            Enter
          </button>
          <span className="egodeath-gate-error" role="alert">
            {error}
          </span>
        </form>
      </div>
    </div>
  );
}

export default EgoDeathGate;
