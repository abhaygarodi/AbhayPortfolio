import React from 'react';
import { content } from '../data/content';
import ScrollWrapper from './ScrollWrapper';
import './Experience.css';

const Experience = () => {
    const { experience: experiences } = content;

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <ScrollWrapper>
                    <h2 className="section-title">Experience</h2>
                </ScrollWrapper>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <ScrollWrapper key={index} className={`stagger-${(index % 2) + 1}`}>
                            <div className="experience-card hover-lift">
                                <div className="card-header">
                                    <h3 className="card-title">{exp.role}</h3>
                                    <div className="card-company">
                                        <span className="company-name">{exp.company}</span>
                                        <span className="exp-type">• {exp.type}</span>
                                    </div>
                                    <span className="card-date">{exp.duration}</span>
                                </div>
                                <p className="card-description">{exp.description}</p>
                            </div>
                        </ScrollWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
