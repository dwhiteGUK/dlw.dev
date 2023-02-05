import { FC } from 'react';
import Link from 'next/link';

import { Nav } from '~/components';

const Header: FC = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="flex px-2 lg:px-0">
          <Link href="./" passHref>
            <div className="flex-shrink-0 flex items-center bg-orange-500 h-20 w-20 border-radius p-2 font-bold text-4xl">
              dlw
            </div>
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
