import { createContext, useEffect, useContext } from 'react';
import useDarkMode from 'use-dark-mode';
import Cookie from 'js-cookie';

type ContextProps = {
  darkMode: boolean;
  toggle: () => boolean;
};

const ThemeContext = createContext<Partial<ContextProps>>({});

function ThemeProvider(props) {
  console.log(props.darkMode);

  const { toggle, value } = useDarkMode(props.darkMode || false, {
    classNameDark: 'dark',
    classNameLight: 'light',
    onChange: (value) => {
      console.log('🚀 ~ file: theme-context.tsx ~ line 22 ~ ThemeProvider ~ value', value);
      Cookie.set('darkMode', JSON.stringify(value), { expires: 7 });      
    },
  });

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
