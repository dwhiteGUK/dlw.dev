import { createContext, useContext } from 'react';
import useDarkMode from 'use-dark-mode';

type ContextProps = {
  darkMode: boolean;
  toggle: () => boolean;
};

const ThemeContext = createContext<Partial<ContextProps>>({});

function ThemeProvider(props) {
  console.log('🚀 ~ file: theme-context.tsx ~ line 12 ~ ThemeProvider ~ props', props);
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
