import { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown } from "./ui/dropdown";
import Fitur from "./ui/items2";

const TableKehadiran = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const totalUsers = response.data.length;
        const lateCount = Math.floor(totalUsers * 0.2);
        const lateIndexes = new Set();
        while (lateIndexes.size < lateCount) {
          lateIndexes.add(Math.floor(Math.random() * totalUsers));
        }

        const formattedData = response.data.map((user, index) => {
          const isAbsent = Math.random() < 0.3;
          const isLate = lateIndexes.has(index);

          if (isAbsent) {
            return {
              no: index + 1,
              name: user.name,
              date: "21 Jan 2025",
              attendance: ["-", "-", "-", "-", "-", "-"],
            };
          }

          const baseTime = 8 * 60;
          const actualTime = isLate ? baseTime + Math.floor(Math.random() * 15 + 5) : baseTime;
          const formatTime = (minutes) => {
            const hours = Math.floor(minutes / 60)
              .toString()
              .padStart(2, "0");
            const mins = (minutes % 60).toString().padStart(2, "0");
            return `${hours}:${mins} WIB`;
          };

          return {
            no: index + 1,
            name: user.name,
            date: "21 Jan 2025",
            attendance: [
              { time: formatTime(actualTime), delay: isLate ? `+${actualTime - baseTime}m` : null },
              { time: "12:00 WIB", delay: null },
              { time: "13:00 WIB", delay: null },
              { time: "15:00 WIB", delay: null },
              { time: "16:00 WIB", delay: null },
              { time: "17:00 WIB", delay: null },
            ],
          };
        });

        setAttendanceData(formattedData);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const dropmenu = ["Semua Market", "SPM Daren", "SPM Bendan Pete"];
  const [selectMenu, SetSelectMenu] = useState(dropmenu[0]);
    const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full">
      <div className="p-8 mx-auto mt-10 shadow-lg bg-white rounded-lg flex flex-col gap-3">
        <div className="flex gap-4 mb-4 text-sm items-center justify-between outline-none border-transparent">
          <Dropdown options={dropmenu} selected={selectMenu} onSelect={SetSelectMenu}/>
          <Fitur value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Cari karyawan..."/>
        </div>
        <div className="overflow-x-auto border rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-[#2d3748]">
                <th className="w-16 px-5 py-6 text-left text-sm font-bold border-b border-gray-300 rounded-tl-lg">NO</th>
                <th className="w-48 px-5 py-6 text-left text-sm font-bold border-b border-gray-300">Nama</th>
                <th className="w-32 px-5 py-6 text-left text-sm font-bold border-b border-gray-300">Tanggal</th>
                <th className="w-36 px-5 py-6 text-left text-sm font-bold border-b border-gray-300">Masuk</th>
                <th className="w-36 px-5 py-6 text-left text-sm font-bold border-b border-gray-300">Istirahat 1</th>
                <th className="w-36 px-5 py-6 text-left text-sm font-bold border-b border-gray-300">Kembali 1</th>
                <th className="w-36 px-5 py-6 text-left text-sm font-bold border-b border-gray-300">Istirahat 2</th>
                <th className="w-36 px-5 py-6 text-left text-sm font-bold border-b border-gray-300">Kembali 2</th>
                <th className="w-36 px-5 py-6 text-left text-sm font-bold border-b border-gray-300 rounded-tr-lg">Pulang</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {loading ? (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : (
                attendanceData.map((user, index) => (
                  <tr key={user.no} className={`${index % 2 === 0 ? "bg-[#ebf0fe]" : "bg-white"}`}>
                    <td className="px-4 py-3 text-[#a0aec0] border-b border-gray-300">{user.no}.</td>
                    <td className="px-4 py-3 text-[#a0aec0] border-b border-gray-300">{user.name}</td>
                    <td className="px-4 py-3 text-[#a0aec0] border-b border-gray-300">{user.date}</td>
                    {user.attendance.map((item, idx) => (
                      <td key={idx} className={`px-4 py-3  border-b border-gray-300 text-[12px] ${typeof item === "string" ? "text-[#e53e3e]" : item.delay ? "text-[#ffac33]" : "text-[#04d57d]"}`}>
                        {typeof item === "string" ? item : `${item.time} ${item.delay ? `(${item.delay})` : ""}`}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableKehadiran;
