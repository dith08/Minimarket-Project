import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./ui/card";
import { MdKeyboardArrowDown } from "react-icons/md";

const AttendanceTable = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Terbaru");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const formattedData = response.data.map((user, index) => ({
          name: user.name,
          type:
            index % 5 === 0 ? "Jam Masuk" : `Jam Istirahat ${(index % 2) + 1}`,
          time: `11:23:${(index + 10).toString().padStart(2, "0")} WIB`,
          timeDifference: index % 2 === 0 ? "+13m" : "+5m",
        }));
        setAttendanceData(formattedData);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="">
      <Card className="p-4 max-w-4xl mx-auto mt-10 shadow-lg bg-white rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-md font-bold text-[#277ffe]">SPM Daren</h1>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-40 font-semibold text-sm px-4 py-2 text-[#277ffe] bg-[#277ffe]/10 rounded-lg flex justify-between items-center focus:outline-none"
            >
              {selectedOption}
              <MdKeyboardArrowDown
                className={`text-xl transition-transform duration-200 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
            {showDropdown && (
              <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-40 text-[#277ffe]">
                {[
                  "Terbaru",
                  "Jam Masuk",
                  "Jam Istirahat 1",
                  "Jam Kembali 1",
                  "Jam Istirahat 2",
                  "Jam Kembali 2",
                  "Pulang",
                ].map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                      selectedOption === option
                        ? "bg-[#277ffe]/10 text-[#277ffe]"
                        : ""
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="rounded-lg border border-[#eceef2]">
          <table className="w-full">
            <thead>
              <tr className="text-[#2d3748]">
                <th className="px-5 py-6 text-left text-sm font-bold border-b border-gray-300">Nama</th>
                <th className="px-5 py-6 text-left text-sm font-bold border-b border-gray-300">Jenis Presensi</th>
                <th className="px-5 py-6 text-left text-sm font-bold border-b border-gray-300">Waktu</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {attendanceData.map((data, index) => {
                const isLate =
                  parseInt(
                    data.timeDifference.replace("+", "").replace("m", "")
                  ) > 10;
                return (
                  <tr
                    key={index}
                    className={`${
                      isLate
                        ? "bg-[#ebf0fe]"
                        : index % 2 === 0
                        ? "bg-gray-50"
                        : "bg-white"
                    } ${index === attendanceData.length - 1 ? "last:rounded-b-lg" : ""}`}
                  >
                    <td className="px-4 py-3  max-w-[200px] text-[#a0aec0] border-b border-gray-300">
                      {data.name}
                    </td>
                    <td className="px-4 py-3 text-[#a0aec0] border-b border-gray-300">
                      {data.type}
                    </td>
                    <td className="px-4 py-3 flex items-center border-b border-gray-300 ">
                      <span
                        className={`font-semibold ${
                          isLate ? "text-[#ffac33]" : "text-[#04d57d]"
                        }`}
                      >
                        {data.time}
                      </span>
                      <span className="text-gray-400 ml-2">
                        {data.timeDifference}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AttendanceTable;