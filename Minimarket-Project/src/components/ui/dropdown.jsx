import { useState, useEffect } from "react";
import { RiArrowDownSFill } from "react-icons/ri";

export const Dropdown = ({ options, selected, onSelect, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setVisibleOptions([]);
      options.forEach((_, index) => {
        setTimeout(() => {
          setVisibleOptions((prev) => [...prev, index]);
        }, index * 150);
      });
    } else {
      setVisibleOptions([]);
    }
  }, [isOpen, options]);

  return (
    <div className={`relative w-[200px] ${className || ""}`}>
      {/* Select Box */}
      <div
        className="border text-slate-500 border-gray-300 rounded-lg flex items-center justify-between p-2 cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <RiArrowDownSFill
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      <ul
        className={`absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {options.map((option, index) => (
          <DropdownItem
            key={option}
            option={option}
            isVisible={visibleOptions.includes(index)}
            onClick={() => {
              onSelect(option);
              setIsOpen(false);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

// Komponen Item Dropdown
const DropdownItem = ({ option, isVisible, onClick }) => {
  return (
    <li
      className={`p-2 text-[#A0AEC0] hover:bg-gray-100 cursor-pointer transition-all duration-300 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      onClick={onClick}
    >
      {option}
    </li>
  );
};
