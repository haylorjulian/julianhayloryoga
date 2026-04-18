import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import WhatIOffer from './components/WhatIOffer';
import Closing from './components/Closing';
import Mandala from './components/Mandala';
import './styles/global.css';

function App() {
  const [mandalaVisible, setMandalaVisible] = useState(true);

  useEffect(() => {
    // Detect which section is in view and hide mandala in sections 2 & 3
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section index: 0=Landing, 1=AboutMe, 2=WhatIOffer, 3=Closing
            const sectionIndex = Array.from(sections).indexOf(entry.target);
            // Hide mandala in sections 2 and 3 (indices 1 and 2)
            setMandalaVisible(sectionIndex !== 1 && sectionIndex !== 2);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main>
      {/* Global mandala background — hidden in sections 2 & 3 */}
      {mandalaVisible && (
        <div className="mandala-global" aria-hidden="true">
          <Mandala />
        </div>
      )}

      <Landing />
      <AboutMe />
      <WhatIOffer />
      <Closing />
    </main>
  );
}

export default App;
