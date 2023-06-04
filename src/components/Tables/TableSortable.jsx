import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

function TableSortable({ headerTitles, className, children }) {
  const [asc, setAsc] = useState(headerTitles[0]);
  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          className={`text-xs text-slate-800 bg-blue-300 dark:bg-gray-700 dark:text-gray-400`}
        >
          <tr>
            {headerTitles.map((title) => {
              return (
                <th
                  key={title}
                  scope="col"
                  className="first:pl-6 last:pr-6 py-4"
                >
                  <button
                    className={"flex items-center"}
                    onClick={() => setAsc(title)}
                  >
                    {title}
                    <span className="ml-1 mt-1">
                      {asc == title ? (
                        <AiFillCaretDown />
                      ) : (
                        <AiFillCaretDown className="text-slate-400" />
                      )}
                    </span>
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default TableSortable;
