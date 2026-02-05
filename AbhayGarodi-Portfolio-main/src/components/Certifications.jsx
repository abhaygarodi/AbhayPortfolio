import React from 'react';
import { content } from '../data/content';
import ScrollWrapper from './ScrollWrapper';
import { FaCertificate } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
    const { certifications, leadership } = content;

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <ScrollWrapper>
                    <h2 className="section-title">Certifications & Achievements</h2>
                </ScrollWrapper>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <ScrollWrapper key={index} className={`stagger-${(index % 3) + 1}`}>
                            <div className="certification-card hover-lift">
                                <div className="cert-icon"><FaCertificate /></div>
                                <div className="cert-content">
                                    <h3>{cert.name}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                    <span className="cert-date">{cert.date}</span>
                                </div>
                            </div>
                        </ScrollWrapper>
                    ))}
                </div>

                {leadership && (
                    <div className="leadership-section">
                        <ScrollWrapper>
                            <h3 className="subsection-title">Leadership & Extracurricular</h3>
                            <div className="leadership-card hover-lift">
                                <ul className="leadership-list">
                                    {leadership.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollWrapper>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
