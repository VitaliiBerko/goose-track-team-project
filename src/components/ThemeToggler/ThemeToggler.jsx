import { useState, useEffect } from 'react';
import * as STC from './ThemeToggler.styled';
import themeTogglerIcon from '../../images/sprite.svg';

export const ThemeToggler = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme !== null ? savedTheme : 'light';
  });

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', currentTheme === 'dark');

    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <STC.Label>
      <STC.Input
        type="checkbox"
        checked={currentTheme === 'dark'}
        onChange={() =>
          setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')
        }
      />
      <STC.Svg>
        <use
          xlinkHref={`${themeTogglerIcon}#${
            currentTheme === 'light' ? 'profile-moon-f' : 'profile-sun-f'
          }`}
        />
      </STC.Svg>
    </STC.Label>
  );
};
