import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import '../animations.css';

const HomePage = () => {
    return (
        <div className="page-transition">
            <Hero />
            <About />
        </div>
    );
};

export default HomePage;
