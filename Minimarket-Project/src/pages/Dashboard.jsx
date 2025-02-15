import Chart from "../components/Chart";
import SpmBandanPete from "../components/SpmBandanPete";
import SpmDaren from "../components/SpmDaren";

const Dashboard = () => {
  return (
    <div className="p-2">
      <div>
      <h1 className="text-[12px] text-[#2d3748]"><span className="text-[#a0aec0]">Halaman /</span> Dasboard</h1>
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-bold text-[#2d3748]">Dasboard</h1>
        <button onClick={() => navigate("/tambahToko")} className="w-[152px] h-8 bg-[#277ffe] rounded-lg text-white text-sm font-semibold mr-2">Tambah Toko</button>
      </div>
        <div className="mt-5 flex justify-center items-center">
        <Chart/>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        <SpmDaren />
        <SpmBandanPete />
      </div>
    </div>
  );
};
export default Dashboard;
