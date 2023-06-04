import React from "react";

function Navbar({ title, rightButton, className }) {
  return (
    <nav
      className={`bg-white dark:bg-gray-900 md:pl-64 fixed z-20 top-0 left-0 right-0 border-b border-gray-200 dark:border-gray-600 ${className}`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="w-12 md:hidden"></div>
        <h3 className="flex-grow self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {title}
        </h3>
        {rightButton}
      </div>
    </nav>
  );
}

export default Navbar;
