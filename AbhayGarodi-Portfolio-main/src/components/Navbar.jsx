import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' },
    ];

    const closeMenu = () => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    AG<span className="dot">.</span>
                </Link>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name} className="nav-item">
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active-link' : ''}`
                                }
                                onClick={closeMenu}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className="nav-item mobile-theme-toggle">
                        <button
                            className="theme-toggle-mobile"
                            onClick={toggleTheme}
                        >
                            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                            {theme === 'light' ? <FaMoon style={{ marginLeft: '10px' }} /> : <FaSun style={{ marginLeft: '10px' }} />}
                        </button>
                    </li>
                </ul>

                <div className="nav-controls">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>

                    <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
