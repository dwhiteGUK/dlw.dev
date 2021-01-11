import { createContext, useContext } from 'react';
import useDarkMode from 'use-dark-mode';

type ContextProps = {
  darkMode: boolean;
  toggle: () => boolean;
};

const initialState = {
  darkMode: true,
};

const ThemeContext = createContext<Partial<ContextProps>>(initialState);

function ThemeProvider(props) {
  const { toggle, value } = useDarkMode(props.darkMode);

  return (
    <ThemeContext.Provider
      value={{
        darkMode: Boolean(value),
        toggle,
      }}
      {...props}
    />
  );
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
