import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";

const FormTambahKaryawan = () => {
  const navigate = useNavigate();
  const [showTambah, setShowTambah] = useState(false);

  const tambah = () => {
    navigate("/dataKaryawan");
  };

  const submit = (e) => {
    e.preventDefault();
    setShowTambah(true);
  };

  return (
    <div className="flex mt-8 h-[calc(100vh-12rem)] bg-gray-100 justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full">
        <form className="space-y-4" onSubmit={submit}>
          <div>
            <label htmlFor="namaToko" className="block text-sm font-medium text-gray-700 mb-1">
              ID
            </label>
            <input type="text" id="namaToko" placeholder="Masukkan Karyawan..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="kepalaToko" className="block text-sm font-medium text-gray-700 mb-1">
              Nama
            </label>
            <input type="text" id="kepalaToko" placeholder="Masukkan nama Karyawan..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="lokasi" className="block text-sm font-medium text-gray-700 mb-1">
              Lokasi Market
            </label>
            <input type="text" id="lokasi" placeholder="Masukkan nomer HP Karyawan..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="nomorHp" className="block text-sm font-medium text-gray-700 mb-1">
              Nomer Handphone
            </label>
            <input type="text" id="nomorHp" placeholder="Masukkan nomer HP Karyawan..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-1">
              Alamat
            </label>
            <textarea id="alamat" placeholder="Masukkan alamat Karyawan..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <div className="flex space-x-4">
              <button onClick={() => navigate("/dataKaryawan")} type="button" className="px-10 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none mt-7">
                Kembali
              </button>
              <button type="submit" onClick={() => setShowTambah(true)} className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none mt-7">
                Tambah Karyawan
              </button>
            </div>
          </div>
        </form>
      </div>
      {showTambah && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="text-center flex flex-col items-center">
              <div className="text-yellow-500 text-6xl mb-2">
                <HiQuestionMarkCircle size={200} />
              </div>
              <h2 className="text-xl font-semibold">Apakah Anda Yakin?</h2>
              <p className="text-gray-600 text-sm mt-2">Perubahan yang Anda lakukan akan tersimpan. Apakah Anda ingin menyimpan perubahan yang telah Anda buat?</p>
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={() => setShowTambah(false)} className="px-6 py-2 bg-red-500 text-white rounded-lg">
                Tidak
              </button>
              <button onClick={tambah} className="px-6 py-2 bg-blue-500 text-white rounded-lg">
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormTambahKaryawan;
