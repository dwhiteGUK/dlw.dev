import { LightbulbIcon, MoonIcon } from '~/components';
import { useTheme } from '~/hooks';

const DarkModeToggle = () => {
  const { darkMode, toggle } = useTheme();

  return (
    <button
      className="inline-flex p-2 ml-2 md:ml-4 hover:text-orange-500"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
    >
      {darkMode ? <LightbulbIcon className="w-6 h-6 fill-current" /> : <MoonIcon className="w-6 h-6 fill-current" />}
    </button>
  );
};

export default DarkModeToggle;
