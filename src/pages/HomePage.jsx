import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import '../animations.css';

const HomePage = () => {
    return (
        <div className="page-transition">
            <Hero />
            <About />

            <div className="mobile-only-sections">
                <Skills />
                <Projects />
                <Experience />
                <Certifications />
                <Contact />
            </div>
        </div>
    );
};

export default HomePage;
