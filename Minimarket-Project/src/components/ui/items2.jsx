import React, { useState } from "react";
import { FiSearch, FiDownload } from "react-icons/fi";
import DatePickerComponent from "./tanggal";

const FilterBar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Cari ID, karyawan..."
        className="border text-gray-600 border-gray-300 p-2 rounded-lg outline-none w-52"
      />

      {/* Date Picker Start */}
      <DatePickerComponent selectedDate={startDate} onChange={setStartDate} />

      <span className="text-blue-500 text-xl">➜</span>

      {/* Date Picker End */}
      <DatePickerComponent selectedDate={endDate} onChange={setEndDate} />

      <button
        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 w-10 flex justify-center items-center"
        aria-label="Cari"
      >
        <FiSearch className="text-gray-600" />
      </button>

      <button
        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 w-10 flex justify-center items-center"
        aria-label="Unduh"
      >
        <FiDownload className="text-gray-600" />
      </button>
    </div>
  );
};

export default FilterBar;
