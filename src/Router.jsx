import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import CertificationsPage from './pages/CertificationsPage';

const AppRouter = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
};

export default AppRouter;
