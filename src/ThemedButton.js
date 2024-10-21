
import React, { useContext } from 'react';
import { ThemeContext } from './App';

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button className={theme === 'light' ? 'light-button' : 'dark-button'}>
      Themed Button
    </button>
  );
}

export default ThemedButton;

