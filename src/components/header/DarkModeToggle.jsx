import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="dark-mode-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      <span className="toggle-slider">
        {isDarkMode ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default DarkModeToggle;