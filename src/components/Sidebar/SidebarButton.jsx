import React from "react";
import { RiCloseFill, RiMenu2Line } from "react-icons/ri";

function SidebarButton({ showAside, onClick }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center fixed z-30 top-3 p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg ${
        showAside ? "translate-x-64" : "translate-x-0"
      } md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
      onClick={onClick}
    >
      <span className="sr-only">Open sidebar</span>
      {showAside ? <RiCloseFill size={20} /> : <RiMenu2Line size={20} />}
    </button>
  );
}

export default SidebarButton;
