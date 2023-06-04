import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const listMonth = [
  "Jun 2023",
  "Mei 2023",
  "Apr 2023",
  "Mar 2023",
  "Feb 2023",
  "Jan 2023",
];

function ButtonDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [month, setMonth] = useState(listMonth[0]);

  return (
    <div className="relative">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {month}
        {isOpen ? (
          <IoChevronUp size={18} className="ml-4" />
        ) : (
          <IoChevronDown size={18} className="ml-4" />
        )}
      </button>

      <div
        className={`${
          isOpen ? "absolute" : "hidden"
        } right-0 top-14 sm:top-12 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul className="py-2 text-sm divide-y divide-gray-100 text-gray-700 dark:text-gray-400">
          {listMonth.map((text) => (
            <LinkItem
              key={text}
              text={text}
              onClick={() => [setMonth(text), setIsOpen(false)]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function LinkItem({ text, onClick }) {
  return (
    <li onClick={onClick}>
      <button className="w-full text-left font-medium px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        {text}
      </button>
    </li>
  );
}

export default ButtonDropdown;
