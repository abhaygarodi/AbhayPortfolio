import React from 'react';
import { content } from '../data/content';
import './About.css';

const About = () => {
    const { personal } = content;

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <p className="about-text">
                        {personal.about}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
