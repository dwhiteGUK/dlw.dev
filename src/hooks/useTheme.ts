import useDarkMode from 'use-dark-mode';
import Cookie from 'js-cookie';

export const useTheme = (initialState = false) => {
  const { toggle, value } = useDarkMode(initialState, {
    classNameDark: 'dark',
    classNameLight: 'light',
    onChange: (value) => {
    console.log('🚀 ~ file: useTheme.ts ~ line 9 ~ useTheme ~ value', value);
      Cookie.set('darkMode', JSON.stringify(value), { expires: 7 });
    },
  });

  return { toggle, darkMode: value };
};
