import React from 'react';
import { content } from '../data/content';
import './Skills.css';
import ScrollWrapper from './ScrollWrapper';
import { FaCode, FaLayerGroup, FaServer, FaTools, FaBrain } from 'react-icons/fa';

const Skills = () => {
    const { skills } = content;

    const skillCategories = [
        { key: 'languages', title: 'Languages', icon: <FaCode /> },
        { key: 'frameworks', title: 'Frameworks & Libs', icon: <FaLayerGroup /> },
        { key: 'backend', title: 'Backend & DB', icon: <FaServer /> },
        { key: 'tools', title: 'Tools & DevOps', icon: <FaTools /> },
        { key: 'core', title: 'Core & Testing', icon: <FaBrain /> }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <ScrollWrapper>
                    <h2 className="section-title">Technical Skills</h2>
                </ScrollWrapper>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <ScrollWrapper key={category.key} className={`stagger-${index + 1}`}>
                            <div className="skill-category-card hover-lift">
                                <div className="category-header">
                                    <span className="category-icon">{category.icon}</span>
                                    <h3>{category.title}</h3>
                                </div>
                                <div className="skills-list">
                                    {skills[category.key]?.map((skill, idx) => (
                                        <span key={idx} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
