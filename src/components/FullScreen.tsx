import { useEffect, useRef, useState } from 'react';

function FullScreen({ children }) {
  const fullScreenRef = useRef();
  const [isFullScreen, setIsFullScreen] = useState(false);

  function toggleFullScreen() {
    if (!fullScreenRef.current) return;

    if (!document.fullscreenElement) {
      fullScreenRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener(
      'keypress',
      function (e) {
        if (e.keyCode === 13) {
          toggleFullScreen();
        }
      },
      false,
    );
  }, []);

  return (
    <div onClick={() => toggleFullScreen()} ref={fullScreenRef} className="relative group bg-white dark:bg-gray-900">
      <div className="absolute top-1 right-1 bg-orange-700 bg-opacity-50 p-2 hidden group-hover:inline-block z-20">
        <svg
          className={`w-7 h-7 z-40 text-gray-100  ${isFullScreen ? 'hidden' : 'inline-block'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
          />
        </svg>
        <svg
          className={`w-7 h-7 z-40 text-gray-100  ${isFullScreen ? 'inline-block' : 'hidden'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
          />
        </svg>
      </div>
      <div className={`${isFullScreen ? 'grid items-center overflow-scroll object-contain' : 'w-full'} h-full`}>
        {children}
      </div>
    </div>
  );
}

export default FullScreen;
