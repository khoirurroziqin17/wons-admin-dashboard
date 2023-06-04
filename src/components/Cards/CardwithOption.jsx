import React from "react";
import { BsThreeDots } from "react-icons/bs";

function CardwithOption({ title, className, children }) {
  return (
    <div className={`bg-slate-50 py-4 px-2 rounded-xl ${className}`}>
      <div className="flex justify-between items-center mx-6 mb-4">
        <h4 className="font-semibold">{title}</h4>
        <BsThreeDots color="gray" />
      </div>
      {children}
    </div>
  );
}

export default CardwithOption;
