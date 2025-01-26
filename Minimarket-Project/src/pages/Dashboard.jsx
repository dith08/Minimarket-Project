import Chart from "../components/Chart"
import SpmBandanPete from "../components/SpmBandanPete"
import SpmDaren from "../components/SpmDaren"

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-[12px] text-[#2d3748]"><span className="text-[#a0aec0]">Halaman /</span> Dashboard</h1>
        <h1 className="text-sm font-bold text-[#2d3748]">Dashboard</h1>
        <Chart/>  
      </div>
      <div className="flex gap-6 mt-6">
        <SpmDaren/>
        <SpmBandanPete/>
      </div>
    </div>
  )
}
export default Dashboard