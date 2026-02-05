import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        // Apply theme to document
        const root = document.documentElement;
        const body = document.body;

        setIsTransitioning(true);

        // Add transitioning class to avoid flashing or stickiness
        body.classList.add('theme-transition');

        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }

        // Save preference
        localStorage.setItem('theme', theme);

        // Remove transition class after animation completes
        const timer = setTimeout(() => {
            setIsTransitioning(false);
            body.classList.remove('theme-transition');
        }, 300); // Matches the css transition time

        return () => clearTimeout(timer);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
