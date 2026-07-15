import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import EgoDeathGate from './components/EgoDeathGate';
import './styles/global.css';

// Lightweight path-based routing — the site has only two "routes":
// the main scroll page (/) and the password-gated guide (/egodeath).
const isEgoDeath =
  window.location.pathname.replace(/\/+$/, '') === '/egodeath';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isEgoDeath ? <EgoDeathGate /> : <App />}
  </StrictMode>,
);
