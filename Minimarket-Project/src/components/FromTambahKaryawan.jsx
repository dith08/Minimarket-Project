import { useNavigate } from 'react-router-dom';

const FormTambahKaryawan = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mt-8 h-[calc(100vh-12rem)] bg-gray-100 justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full">
        <form className="space-y-4">
          <div>
            <label htmlFor="namaToko" className="block text-sm font-medium text-gray-700 mb-1">
              ID
            </label>
            <input
              type="text"
              id="namaToko"
              placeholder="Masukkan Karyawan..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="kepalaToko" className="block text-sm font-medium text-gray-700 mb-1">
                Nama
            </label>
            <input
              type="text"
              id="kepalaToko"
              placeholder="Masukkan nama Karyawan..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="nomorHp" className="block text-sm font-medium text-gray-700 mb-1">
              Lokasi Market
            </label>
            <input
              type="text"
              id="nomorHp"
              placeholder="Masukkan nomer HP Karyawan..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="nomorHp" className="block text-sm font-medium text-gray-700 mb-1">
              Nomer Handphone
            </label>
            <input
              type="text"
              id="nomorHp"
              placeholder="Masukkan nomer HP Karyawan..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
         
          <div>
            <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-1">
            Alamat 
            </label>
            <textarea
              id="alamat"
              placeholder="Masukkan alamat Karyawan..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <div className="flex space-x-4">
              <button
                onClick={() => navigate("/dataKaryawan")}
                type="button"
                className="px-10 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none mt-7"
              >
                Kembali
              </button>
              <button
                type="submit"
                className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none mt-7"
              >
                Tambah Karyawan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormTambahKaryawan