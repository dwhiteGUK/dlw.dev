import { createContext, useContext } from 'react';
import useDarkMode from 'use-dark-mode';

type ContextProps = {
  darkMode: boolean;
  toggle: () => boolean;
};

// const initialState = {
//   darkMode: true,
// };
const ThemeContext = createContext<Partial<ContextProps>>({});

function ThemeProvider(props) {
  const { toggle, value } = useDarkMode();

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
