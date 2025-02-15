import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const DatePickerComponent = ({ selectedDate, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Input untuk memilih tanggal */}
      <input
        type="text"
        value={selectedDate ? format(selectedDate, "dd / MM / yyyy") : ""}
        placeholder="Pilih Tanggal"
        readOnly
        onClick={() => setOpen(true)}
        className="border text-gray-600 border-gray-300 p-2 rounded-lg outline-none w-40 cursor-pointer"
      />

      {/* Modal Date Picker */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Pilih Tanggal</h2>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                onChange(date);
                setOpen(false);
              }}
              inline
            />
            <button
              onClick={() => setOpen(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePickerComponent;
