import useDarkMode from 'use-dark-mode';
import { LightbulbIcon, MoonIcon } from '~/components';

const DarkModeToggle = () => {
  const { toggle, value } = useDarkMode();

  return (
    <button
      className="inline-flex p-2 ml-2 md:ml-4 hover:bg-gray-200 dark-hover:bg-gray-700"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
    >
      {value ? <LightbulbIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
    </button>
  );
};

export default DarkModeToggle;
