import { createContext, useContext } from 'react';
//import useDarkMode from 'use-dark-mode';
import { useTheme } from '~/hooks';

type ContextProps = {
  darkMode: boolean;
  toggle: () => boolean;
};

const initialState = {
  darkMode: true,
};

const ThemeContext = createContext<Partial<ContextProps>>(initialState);

function ThemeProvider(props) {
  const { darkMode, toggle } = useTheme();
  console.log('🚀 ~ file: theme-context.tsx ~ line 18 ~ ThemeProvider ~ darkMode', darkMode);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggle,
      }}
      {...props}
    />
  );
}

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useTheme, useThemeContext };
