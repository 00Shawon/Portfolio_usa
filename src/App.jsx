import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Journey from './components/Sections/Journey'; // Keeping this if needed later, but removing from view
import Work from './components/Sections/Work';
import WhatIDo from './components/Sections/WhatIDo';
import Experience from './components/Sections/Experience';
import Philosophy from './components/Sections/Philosophy';
import TechStack from './components/Sections/TechStack';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import Design from './components/Sections/Design';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Design/>
        <Work />
        <Experience />
        <Philosophy />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
