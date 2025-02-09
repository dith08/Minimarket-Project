import React from "react";
import { FiSearch } from "react-icons/fi"; 

const SearchInput = ({ value, onChange, placeholder, className }) => {
  return (
    <div className="flex gap-3">
        <input
          type="text"
          placeholder={placeholder}
          className={`border text-[#A0AEC0] border-gray-300  p-2 rounded-lg flex-grow w-[250px] outline-none h-[2.4rem]${className || ""}`}
          value={value}
          onChange={onChange}
        />
        <FiSearch className="mr-2 text-gray-500 border p-2 rounded-lg flex-grow bg-white" size={40}/> {/* Menambahkan ikon di kiri input */}
    </div>
  );
};

export default SearchInput;
