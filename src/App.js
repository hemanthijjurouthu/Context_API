import React, { useState, createContext } from 'react';
import './styles/style.css';
import ThemedButton from './ThemedButton';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  // F
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="container">
        <h1>Theme Switcher</h1>
        
        {/* Button to toggle the theme */}
        <button onClick={toggleTheme} className="toggle-theme">
          Toggle Theme
        </button>

        {/* Themed button component */}
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
