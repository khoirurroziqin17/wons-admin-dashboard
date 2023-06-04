import React from "react";

function InputText({ label, placeholder, onChange }) {
  return (
    <div className="mb-6">
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={label}
        className="bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-teal-500 placeholder:text-slate-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputText;
