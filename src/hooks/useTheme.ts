//import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';

export const useTheme = () => {
  const { value, toggle } = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  });
  
  return {
    darkMode: value,
    toggle,
  };
};
