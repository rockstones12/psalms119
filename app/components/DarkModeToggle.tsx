import { useEffect, useState } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center gap-2 p-3 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-700 shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
    >
      {darkMode ? (
        <>
          <BsSunFill className="text-yellow-400" size={10} />
          {/* <span>Light Mode</span> */}
        </>
      ) : (
        <>
          <BsMoonFill className="text-blue-500" size={10} />
          {/* <span>Dark Mode</span> */}
        </>
      )}
    </button>
  );
}
