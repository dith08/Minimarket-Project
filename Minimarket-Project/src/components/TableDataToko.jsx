import React from 'react'
import { useNavigate } from "react-router-dom"
const TableDataToko = () => {
  const navigate = useNavigate()
  return (
    <div className="overflow-x-auto bg-white p-7  shadow-[0px_0px_22px_0px_rgba(1,41,112,0.04)] mt-6 rounded-lg">
        <h1 className="text-sm font-bold mb-6 text-[#2d3748]">Data Toko Surya Pratama Mart</h1> 
      <div className="border-2 border-[#eceef2] rounded-lg overflow-hidden">
        <table className="min-w-full bg-white table-fixed">
          <thead>
            <tr>
              <th className="py-4 px-4 text-[#2d3748] text-sm text-left">No</th>
              <th className="py-4 px-4 text-[#2d3748] text-sm text-left">Nama Toko</th>
              <th className="py-4 px-4 text-[#2d3748] text-sm text-left">Kepala Toko</th>
              <th className="py-4 px-4 text-[#2d3748] text-sm text-left">No Telepon</th>
              <th className="py-4 px-4 text-[#2d3748] text-sm text-left">Alamat</th>
              <th className="py-4 px-4 text-[#2d3748] text-sm text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-[#ebf0fe]'>
              <td className="py-2 px-4 text-sm truncate text-[#a0aec0]">1</td>
              <td className="py-2 px-4 text-sm truncate text-[#a0aec0]">Surya Pratama Mart Daren</td>
              <td className="py-2 px-4 text-sm truncate text-[#a0aec0]">Bagas Saputra</td>
              <td className="py-2 px-4 text-sm truncate text-[#a0aec0]">081234567890</td>
              <td className="py-2 px-4 text-sm truncate text-[#a0aec0]">Jl. Nalumsari - Ngetuk, Bendan,<br/>Bendanpete, Kec. Nalumsari, Jepara</td>
              <td className="py-2 px-4 text-[9px]">
                <button onClick={() => navigate("/detailDataToko")} className="h-[23px] px-7 py-1.5 bg-[#277ffe] rounded-lg justify-center items-center gap-2.5 inline-flex overflow-hidden text-white">Detail</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-sm truncate text-[#a0aec0]">2</td>
              <td className="py-2 px-4 text-sm truncate text-[#a0aec0]">Surya Pratama Mart Bandan Pete</td>
              <td className="py-2 px-4 text-sm truncate text-[#a0aec0]">Muhammad Rizky Aditya Pratama</td>
              <td className="py-2 px-4 text-sm truncate text-[#a0aec0]">089876543210</td>
              <td className="py-2 px-4 text-sm truncate text-[#a0aec0]">Jl. Nalumsari - Ngetuk, Bendan,<br/>Bendanpete, Kec. Nalumsari, Jepara</td>
              <td className="py-2 px-4 text-[9px]">
                <button onClick={() => navigate("/detailDataToko")} className="h-[23px] px-7 py-1.5 bg-[#277ffe] rounded-lg justify-center items-center gap-2.5 inline-flex overflow-hidden text-white">Detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableDataToko