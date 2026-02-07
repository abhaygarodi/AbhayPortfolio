import React from 'react';
import ScrollWrapper from './ScrollWrapper';
import './Projects.css';

const getTechColor = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('javascript') || techLower.includes('html') || techLower.includes('css') || techLower.includes('react')) return 'frontend';
    if (techLower.includes('java') || techLower.includes('spring') || techLower.includes('jdbc') || techLower.includes('jwt')) return 'backend';
    if (techLower.includes('mysql') || techLower.includes('security')) return 'backend';
    if (techLower.includes('oops')) return 'backend';
    return 'general';
};

const Projects = () => {
    const projectList = [
        {
            title: "MicroLift – Micro-Donation Web Platform",
            description: "MicroLift is a full-stack web application enabling secure micro-donations for education and medical needs. Built using React JS, Spring Boot, JWT Security, and MySQL.",
            techStack: ["React JS,", "Spring Boot,", "JWT Security,", "MySQL."],
            link: "https://github.com/abhaygarodi/MicroLift"
        },
        {
            title: "Smart Expense Tracker",
            description: "A clean and simple React Expense Tracker that lets users add, view, filter, and delete expenses with a modern UI.",
            techStack: ["JavaScript,", "React."],
            link: "https://github.com/abhaygarodi/Smart-Expense-Tracker-app"
        },
        {
            title: "Hotel Reservation System",
            description: "A Core Java command-line application for managing hotel room reservations using JDBC to connect to a MySQL database.",
            techStack: ["Java,", "JDBC,", "MySql."],
            link: "https://github.com/abhaygarodi/Hotel-Reservation-System"
        },
        {
            title: "Student Management System",
            description: "Console-based system developed using OOPs with Java. Demonstrates packages, collections, arrays, lambda expressions.",
            techStack: ["Java,", "OOPs,", "JDBC,", "MySql."],
            link: "https://github.com/abhaygarodi/Student-Management-System"
        },
        {
            title: "Music Player WebApp",
            description: "Built a responsive Spotify clone with HTML, CSS, and JavaScript, featuring play, pause, and volume controls.",
            techStack: ["JavaScript,", "HTML,", "CSS."],
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
                        <ScrollWrapper key={index} className={`stagger-${(index % 5) + 1}`}>
                            <div className="project-card hover-lift">
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className={`tech-badge ${getTechColor(tech)}`}>{tech}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-project btn-glow">
                                        View on GitHub
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
