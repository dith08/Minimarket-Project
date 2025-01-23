import { FaHome, FaUsers, FaShoppingCart, } from "react-icons/fa";
import { LiaUserCheckSolid } from "react-icons/lia";
import { IoStorefront } from "react-icons/io5";
import { RiBook3Fill } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className="w-64 h-screen bg-gray-50 shadow-md">
      {/* Logo dan Judul */}
      <div className="flex items-center mt-8 px-6">
        {/* Logo SPM */}
        <img
          src={logo}
          alt="SPM Logo"
          className="w-14 h-10 object-contain"
        />
        <h2 className="ml-3 text-sm font-bold text-gray-700">
          Surya Pratama Mart
        </h2>
      </div>
      <hr className="w-10/12 mx-auto my-4 border-t border-gray-300" />

      {/* Menu */}
      <div className="mt-8">
        {/* Dashboard */}
        <NavLink to="/dashboard">
          <div
            onClick={() => setActiveMenu("Dashboard")}
            className={`flex items-center px-6 py-3 mx-4 mb-3 rounded-2xl cursor-pointer ${
              activeMenu === "Dashboard"
                ? "bg-white shadow-md text-gray-700"
                : "text-gray-500"
            }`}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-2xl ${
                activeMenu === "Dashboard" ? "bg-blue-500" : "bg-white"
              }`}
            >
              <FaHome
                className={`w-5 h-5 ${
                  activeMenu === "Dashboard" ? "text-white" : "text-blue-500"
                }`}
              />
            </div>
            <span className="ml-4 font-medium text-sm">Dashboard</span>
          </div>
        </NavLink>

        {/* Kehadiran */}
        <NavLink to="/kehadiran">
          <div
            onClick={() => setActiveMenu("Kehadiran")}
            className={`flex items-center px-6 py-3 mx-4 mb-3 rounded-2xl cursor-pointer ${
              activeMenu === "Kehadiran"
                ? "bg-white shadow-md text-gray-700"
                : "text-gray-500"
            }`}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-2xl ${
                activeMenu === "Kehadiran" ? "bg-blue-500" : "bg-white"
              }`}
            >
              <LiaUserCheckSolid
                className={`w-5 h-5 ${
                  activeMenu === "Kehadiran" ? "text-white" : "text-blue-500"
                }`}
              />
            </div>
            <span className="ml-4 font-medium text-sm">Kehadiran</span>
          </div>
        </NavLink>

        {/* Data Karyawan */}
        <NavLink to="/dataKaryawan">
          <div
            onClick={() => setActiveMenu("Data Karyawan")}
            className={`flex items-center px-6 py-3 mx-4 mb-3 rounded-2xl cursor-pointer ${
              activeMenu === "Data Karyawan"
                ? "bg-white shadow-md text-gray-700"
                : "text-gray-500"
            }`}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-2xl ${
                activeMenu === "Data Karyawan" ? "bg-blue-500" : "bg-white"
              }`}
            >
              <FaUsers
                className={`w-5 h-5 ${
                  activeMenu === "Data Karyawan" ? "text-white" : "text-blue-500"
                }`}
              />
            </div>
            <span className="ml-4 font-medium text-sm">Data Karyawan</span>
          </div>
        </NavLink>

        {/* Data Toko */}
        <NavLink to="/datatoko">
          <div
            onClick={() => setActiveMenu("Data Toko")}
            className={`flex items-center px-6 py-3 mx-4 mb-3 rounded-2xl cursor-pointer ${
              activeMenu === "Data Toko"
                ? "bg-white shadow-md text-gray-700"
                : "text-gray-500"
            }`}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-2xl ${
                activeMenu === "Data Toko" ? "bg-blue-500" : "bg-white"
              }`}
            >
              <IoStorefront
                className={`w-5 h-5 ${
                  activeMenu === "Data Toko" ? "text-white" : "text-blue-500"
                }`}
              />
            </div>
            <span className="ml-4 font-medium text-sm">Data Toko</span>
          </div>
        </NavLink>

        {/* Log Out */}
        <NavLink to="/login">
          <div
            onClick={() => setActiveMenu("Log Out")}
            className={`flex items-center px-6 py-3 mx-4 rounded-2xl cursor-pointer ${
              activeMenu === "Log Out"
                ? "bg-white shadow-md text-gray-700"
                : "text-gray-500"
            }`}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-2xl ${
                activeMenu === "Log Out" ? "bg-red-500" : "bg-white"
              }`}
            >
              <RiBook3Fill className="w-5 h-5 text-red-500" />
            </div>
            <span className="ml-4 font-medium text-sm text-red-500">
              Log Out
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
