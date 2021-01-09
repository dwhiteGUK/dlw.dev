import { LightbulbIcon, MoonIcon } from '~/components';
import { useTheme } from '~/hooks';

const DarkModeToggle = () => {
  const { darkMode, toggle } = useTheme();

  return (
    <button
      className="inline-flex p-2 ml-2 md:ml-4 hover:bg-gray-200 dark-hover:bg-gray-700"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
    >
      {darkMode ? <LightbulbIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
    </button>
  );
};

export default DarkModeToggle;
