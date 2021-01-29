import { LightbulbIcon, MoonIcon } from '~/components';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="inline-flex p-2 ml-2 md:ml-4 hover:text-orange-500"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle light and dark mode"
    >
      {theme === 'dark' ? (
        <LightbulbIcon className="w-6 h-6 fill-current" />
      ) : (
        <MoonIcon className="w-6 h-6 fill-current" />
      )}
    </button>
  );
};

export default DarkModeToggle;
