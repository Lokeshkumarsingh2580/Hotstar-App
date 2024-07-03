import React from "react";

const DropDown = ({ title, options, func }) => {
  return (
    <div>
      <select
        defaultValue="0"
        className="text-white bg-gray-800 p-2 rounded-lg w-32 "
        onChange={func}
      >
        <option value="0" disabled>
          {title}
        </option>
        {options.map((items, index) => (
          <option key={index} value={items} className="rounded">
            {items.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
