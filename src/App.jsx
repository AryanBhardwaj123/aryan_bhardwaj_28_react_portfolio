import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CodeJourney from './components/CodeJourney';
import CodingProfiles from './components/CodingProfiles';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen bg-darker text-white selection:bg-primary selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <About />
                <CodeJourney />
                <Skills />
                <Certifications />
                <CodingProfiles />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
