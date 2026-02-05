import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ScrollWrapper = ({ children, className = '', style = {}, threshold = 0.1 }) => {
    const [ref, isVisible] = useScrollAnimation(threshold);

    return (
        <div
            ref={ref}
            className={`scroll-animate ${isVisible ? 'visible' : ''} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default ScrollWrapper;
