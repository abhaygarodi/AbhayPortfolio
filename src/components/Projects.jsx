import React from 'react';
import ScrollWrapper from './ScrollWrapper';
import { FaGitAlt } from 'react-icons/fa';
import './Projects.css';

const getTechColor = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('react') || techLower.includes('html') || techLower.includes('css') || techLower.includes('javascript') || techLower.includes('bootstrap')) return 'frontend';
    if (techLower.includes('java') || techLower.includes('spring') || techLower.includes('hibernate') || techLower.includes('mysql') || techLower.includes('jwt') || techLower.includes('jdbc') || techLower.includes('oops')) return 'backend';
    return 'general';
};

const Projects = () => {
    const projectList = [
        {
            title: "Micro-Donation for Student fees and Medical Bills",
            description: "A full-stack web application enabling secure micro-donations. Beneficiaries create campaigns, donors contribute transparently, and admins validate documents. Features role-based access and real-time tracking.",
            techStack: ["React JS", "Spring Boot", "MySQL", "Hibernate", "JWT", "Bootstrap"],
            link: "https://github.com/abhaygarodi/MicroLift"
        },
        {
            title: "Smart Expense Tracker",
            description: "A clean and simple React Expense Tracker that lets users add, view, filter, and delete expenses with a modern UI.",
            techStack: ["JavaScript", "Reactjs"],
            link: "https://github.com/abhaygarodi/Smart-Expense-Tracker-app"
        },
        {
            title: "Hotel Reservation System",
            description: "A Core Java command-line application for managing hotel room reservations using JDBC to connect to a MySQL database.",
            techStack: ["Java", "JDBC", "MySql"],
            link: "https://github.com/abhaygarodi/Hotel-Reservation-System"
        },
        {
            title: "Student Management System",
            description: "Console-based system developed using OOPs with Java. Demonstrates packages, collections, arrays, lambda expressions.",
            techStack: ["Java", "OOPs", "JDBC", "MySql"],
            link: "https://github.com/abhaygarodi/Student-Management-System"
        },
        {
            title: "Music Player WebApp",
            description: "Built a responsive Spotify clone with HTML, CSS, and JavaScript, featuring play, pause, and volume controls.",
            techStack: ["JavaScript", "HTML", "CSS"],
            link: "https://github.com/abhaygarodi/Music-Player-WebApp"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <ScrollWrapper>
                    <h2 className="section-title">Projects</h2>
                </ScrollWrapper>

                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <ScrollWrapper key={index} className={`stagger-${(index % 4) + 1}`}>
                            <div className="project-card hover-lift">
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className={`tech-badge ${getTechColor(tech)}`}>{tech}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-glow">
                                        <span style={{ position: 'relative', zIndex: 10 }}>View on GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </ScrollWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
