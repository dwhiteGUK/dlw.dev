import { Github, Strava, Twitter } from '~/components/logos';

export function Footer() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider">
          Find me on
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8 text-gray-400">
          <div className="col-span-1 flex justify-center py-8 px-8">
            <a href="https://www.strava.com/athletes/1625632">
              <Strava />
            </a>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <a href="https://twitter.com/dlw">
              <Twitter />
            </a>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <a href="https://github.com/dwhiteGUK">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
