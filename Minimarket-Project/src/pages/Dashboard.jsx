import Chart from "../components/Chart"

const Dashboard = () => {
  return (
    <div className="p-5">
      <div>
      <h1 className="text-[12px]"><span className="text-gray-400">Halaman /</span> Dashboard</h1>
      <h1 className="text-sm font-bold text-gray-700">Dashboard</h1>
      <Chart/>  
      </div>
    </div>
  )
}

export default Dashboard