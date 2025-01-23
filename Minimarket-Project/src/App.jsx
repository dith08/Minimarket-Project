import SideBar from "./components/SideBar"
import Dashboard from "./pages/Dashboard";
import DataKaryawan from "./pages/DataKaryawan";
import DataToko from "./pages/DataToko";
import Kehadiran from "./pages/Kehadiran";
import Login from "./pages/Login"
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/";

  return(
    <div className="flex">
      {!isLoginPage && <SideBar />}
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/kehadiran" element={<Kehadiran/>} />
          <Route path="/dataKaryawan" element={<DataKaryawan/>} />
          <Route path="/dataToko" element={<DataToko/>} />
        </Routes>
      </div>        
    </div>
  )
}


export default App