import React from "react";

function Button({ label, icon, onClick }) {
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={onClick}
    >
      {label}
      {icon}
    </button>
  );
}

export default Button;
