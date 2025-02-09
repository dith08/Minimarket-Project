import TabelDataKaryawan from "../components/TabelDataKaryawan";
import { useNavigate } from "react-router-dom";

const DataKaryawan = () => {
  const navigate = useNavigate();

  return (
    <div className="p-2">
      <h1 className="text-[12px] text-[#2d3748]">
        <span className="text-[#a0aec0]">Halaman /</span> Data Karyawan
      </h1>
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-bold text-[#2d3748]">Data Toko</h1>
        <button onClick={() => navigate("/tambahKaryawan")} className="w-[152px] h-8 bg-[#277ffe] rounded-lg text-white text-sm font-semibold mr-2">
          Tambah Karyawan
        </button>
      </div>
      <div className="mt-7">
        <TabelDataKaryawan />
      </div>
    </div>
  );
};

export default DataKaryawan;
