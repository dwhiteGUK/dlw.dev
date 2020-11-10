import { FC } from 'react';

import { Nav } from '~/components';

const Header: FC = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="flex px-2 lg:px-0">
          <div className="flex-shrink-0 flex items-center bg-orange-500 p-6 border-radius text-gray-800 font-bold text-5xl">
            dlw
          </div>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
