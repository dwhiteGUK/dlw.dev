import { createContext, useContext } from 'react';
import useDarkMode from 'use-dark-mode';

type ContextProps = {
  darkMode: boolean;
  toggle: () => void;
};

// const initialState = {
//   darkMode: true,
// };
const ThemeContext = createContext<Partial<ContextProps>>({});
//const ThemeContext = createContext({});

function ThemeProvider(props) {
  const { toggle, value } = useDarkMode(props.darkMode);

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
