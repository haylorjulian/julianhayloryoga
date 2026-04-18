import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import WhatIOffer from './components/WhatIOffer';
import Closing from './components/Closing';
import Mandala from './components/Mandala';
import './styles/global.css';

function App() {
  return (
    <main>
      {/* Global mandala background — visible on all sections */}
      <div className="mandala-global" aria-hidden="true">
        <Mandala />
      </div>

      <Landing />
      <AboutMe />
      <WhatIOffer />
      <Closing />
    </main>
  );
}

export default App;
