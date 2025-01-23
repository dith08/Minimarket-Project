import logo from "../assets/logo.png";
import { BsShieldLockFill } from "react-icons/bs";
import { FaIdCard } from "react-icons/fa";


const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Logo */}
      <img src={logo} alt="Logo" className="mb-7" width={186} height={107} />
      <h1 className="text-2xl font-bold mb-5 text-gray-700">Selamat Datang</h1>
      <p className="text-[10px] text-gray-500 mb-5">
        Masukan username dan password untuk mengakses
      </p>

      {/* Input Username */}
      <div className="flex items-center border rounded-lg mb-4 px-6 py-3 bg-white shadow-sm w-[300px]">
        <FaIdCard className="text-blue-500 mr-4 w-5 h-5" />
        <input
          type="text"
          placeholder="Masukkan username"
          className="flex-grow focus:outline-none text-sm text-gray-700"
        />
      </div>

      {/* Input Password */}
      <div className="flex items-center border rounded-lg mb-4 px-6 py-3 bg-white shadow-sm w-[300px]">
        <BsShieldLockFill className="text-blue-500 mr-4 w-5 h-5" />
        <input
          type="password"
          placeholder="Masukkan password"
          className="flex-grow focus:outline-none text-sm text-gray-700"
        />
      </div>

      {/* Button */}
      <a
        href="/dashboard"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-32 py-3 rounded-lg mb-4 shadow-md text-sm"
      >
        Sign In
      </a>

      {/* Lupa Password */}
      <p className="text-[10px] text-gray-500 mt-5">
        Lupa Password? <a href="#" className="text-blue-500">Reset Password</a>
      </p>
    </div>
  );
};

export default Login;
