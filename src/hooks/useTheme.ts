import useDarkMode from 'use-dark-mode';
import Cookie from 'js-cookie';

export const useTheme = (initialState = false) => {
  console.log('🚀 ~ file: useTheme.ts ~ line 5 ~ useTheme ~ initialState', initialState);

  const { toggle, value } = useDarkMode(initialState, {    
    classNameDark: 'dark',
    classNameLight: 'light',
    onChange: (value) => {
      Cookie.set('darkMode', JSON.stringify(value), { expires: 7 });
    },
  });

  return { toggle, darkMode: value };
};
