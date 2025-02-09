import { Card } from "./ui/card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiChevronDown } from "react-icons/fi";
import { Dropdown } from "./ui/dropdown";
import SearchInput from "./ui/search";
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";

const TabelDataKaryawan = () => {
  const [dataKaryawan, setDataKaryawan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const locations = ["Semua Market", "SPM Daren", "SPM Bendan Pete"];
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const API = await axios.get("https://jsonplaceholder.typicode.com/users");
        setDataKaryawan(API.data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="p- w-full">
      <div className="overflow-x-auto bg-white p-7  shadow-[0px_0px_22px_0px_rgba(1,41,112,0.04)] mt-6 rounded-lg">
        <div className="flex gap-4 mb-4 text-sm items-center justify-between outline-none border-transparent">
          <Dropdown options={locations} selected={selectedLocation} onSelect={setSelectedLocation} />
          <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Cari karyawan..." />
        </div>

        <div className="border-2 border-[#eceef2] rounded-lg overflow-hidden">
          <table className="w-full border-separate border-spacing-0 rounded-lg">
            <thead>
              <tr className="bg-white text-left h-16 text-[#2d3748] text-sm">
                <th className="p-6">No</th>
                <th className="p-2">ID</th>
                <th className="p-2">Nama</th>
                <th className="p-2">Lokasi</th>
                <th className="p-2">No Telepon</th>
                <th className="p-2">Alamat</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataKaryawan
                .filter((karyawan) => karyawan.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((karyawan, index) => (
                  <tr key={karyawan.id} className={index % 2 === 0 ? "bg-[#ebf0fe]" : ""}>
                    <td className="p-6 text-[#a0aec0]">{karyawan.id}</td>
                    <td className="p-2 text-blue-600 ">{index + 1111}</td>
                    <td className="p-2 text-[#a0aec0]">{karyawan.name}</td>
                    <td className="p-2 text-[#a0aec0]">SPM Daren</td>
                    <td className="p-2 text-[#a0aec0]">{karyawan.phone}</td>
                    <td className="p-2 text-[#a0aec0]">{karyawan.address?.street || "-"}</td>
                    <td className="py-2 px-4 text-[9px] text-[#a0aec0]">
                      <button onClick={() => navigate(`/detailKaryawan/${karyawan.id}`)} className="h-[23px] px-7 py-1.5 bg-[#277ffe] rounded-lg justify-center items-center gap-2.5 inline-flex overflow-hidden text-white">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TabelDataKaryawan;
