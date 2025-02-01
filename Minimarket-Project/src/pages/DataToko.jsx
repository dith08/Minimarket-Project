import TableDataToko from "../components/TableDataToko"
import { useNavigate } from "react-router-dom"

const DataToko = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div>
      <h1 className="text-[12px] text-[#2d3748]"><span className="text-[#a0aec0]">Halaman /</span> DataToko</h1>
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-bold text-[#2d3748]">Data Toko</h1>
        <button onClick={() => navigate("/tambahToko")} className="w-[152px] h-8 bg-[#277ffe] rounded-lg text-white text-sm font-semibold mr-2">Tambah Toko</button>
      </div>
      </div>
      <TableDataToko/>
    </div>
  )
}
export default DataToko