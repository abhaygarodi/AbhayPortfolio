import React from 'react';
import { content } from '../data/content';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    const { personal } = content;

    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1>Abhay Garodi</h1>
                    <h2>Full Stack Web Developer | Java Full Stack Developer | Spring Boot | React</h2>
                    <p>
                        Passionate Java Full Stack Developer with strong foundations in Core Java, Spring Boot, REST APIs, and modern web technologies. Experienced in building scalable backend systems and responsive front-end applications with a focus on clean code and real-world problem solving.
                    </p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn">View Projects</a>
                        <a href="https://drive.google.com/file/d/1shzBLS3O_wUo53PabsPn9YB2ApMJC-7Q/view?usp=drive_link" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Resume</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="profile-img-container">
                        <img src={profileImg} alt="Abhay Garodi" className="profile-img" />
                        <div className="profile-bg-circle"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
