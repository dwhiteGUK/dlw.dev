import { createContext, useContext } from 'react';
import useDarkMode from 'use-dark-mode';

const initialState = {
  darkMode: true,
};
const ThemeContext = createContext(initialState);

function ThemeProvider(props) {
  const { toggle, value } = useDarkMode(initialState.darkMode);

  return (
    <ThemeContext.Provider
      value={{
        darkMode: value,
        toggle,
      }}
      {...props}
    />
  );
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
