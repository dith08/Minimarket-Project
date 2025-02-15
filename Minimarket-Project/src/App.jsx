import SideBar from "./components/SideBar"
import Dashboard from "./pages/Dashboard";
import DataKaryawan from "./pages/DataKaryawan";
import DataToko from "./pages/DataToko";
import Kehadiran from "./pages/Kehadiran";
import Login from "./pages/Login"
import TambahToko from "./pages/TambahToko";
import DetailDataToko from "./pages/DetailDataToko";
import { Routes, Route, useLocation } from "react-router-dom";
import FormDetailDataKaryawan from "./components/FormDetailDataKaryawan";
import FormTambahKaryawan from "./components/FromTambahKaryawan";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/";

  return(
    <div className="flex bg-[#F8F9FA]">
      {!isLoginPage && <div className="hidden md:flex"><SideBar/></div> }
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/kehadiran" element={<Kehadiran/>} />
          <Route path="/dataKaryawan" element={<DataKaryawan/>} />
          <Route path="/dataToko" element={<DataToko/>} />
          <Route path="/detailDataToko" element={<DetailDataToko/>} />
          <Route path="/tambahToko" element={<TambahToko/>} />
          <Route path="/detailKaryawan/:id" element={<FormDetailDataKaryawan/>} />
          <Route path="/tambahKaryawan" element={<FormTambahKaryawan/>} />
        </Routes>
      </div>        
    </div>
  )
}


export default App