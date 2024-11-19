// src/components/GoToTopButton.jsx
import React, { useState, useEffect } from 'react';

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
                >
                    ↑ Top
                </button>
            )}
        </div>
    );
};

export default GoToTopButton;
