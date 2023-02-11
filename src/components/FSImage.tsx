'use client';
import { useCallback, useEffect, useRef, useState, ReactElement } from 'react';
import Image from 'next/image';

function useFullScreen() {
  const fullScreenRef = useRef<HTMLDivElement>();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = useCallback(() => {
    if (!fullScreenRef.current) return;

    if (!fullScreenRef.current.requestFullscreen) {
      console.log(fullScreenRef.current.dataset.src);
      return (window.location.href = fullScreenRef.current.dataset.src);
    }

    if (!isFullScreen) {
      fullScreenRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  }, [isFullScreen]);

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
  }, [toggleFullScreen]);

  return { isFullScreen, toggleFullScreen, fullScreenRef };
}

export function FSImage(props): ReactElement {
  const { isFullScreen, toggleFullScreen, fullScreenRef } = useFullScreen();

  // eslint-disable-next-line react/prop-types
  const { src } = props;

  return (
    <div
      onClick={() => toggleFullScreen()}
      ref={fullScreenRef}
      data-src={src}
      className="relative group bg-white dark:bg-gray-900"
    >
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
        <Image {...props} />
      </div>
    </div>
  );
}

export default FSImage;
