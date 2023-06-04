import React from "react";

function SidebarItem({ href = "/", text, icon, label, labelColor, active }) {
  return (
    <li>
      <a
        href={href}
        className={`flex items-center p-2  rounded-lg ${
          active
            ? "text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
            : "text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500"
        }`}
      >
        {icon}
        {label ? (
          <>
            <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
            {labelColor ? (
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {label}
              </span>
            ) : (
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {label}
              </span>
            )}
          </>
        ) : (
          <span className="ml-3">{text}</span>
        )}
      </a>
    </li>
  );
}

export default SidebarItem;
