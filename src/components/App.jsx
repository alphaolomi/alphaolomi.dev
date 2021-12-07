import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';

import { PortfolioProvider } from '../context/context';

import { heroData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  // const [projects, setProjects] = useState([]);
  // const [contact, setContact] = useState({});
  // const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    // setProjects([...projectsData]);
    // setContact({ ...contactData });
    // setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero }}>
      <Hero />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </PortfolioProvider>
  );
}

export default App;
