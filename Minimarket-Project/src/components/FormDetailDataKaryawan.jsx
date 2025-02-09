import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiSolidTrash } from "react-icons/bi";
import { HiQuestionMarkCircle } from "react-icons/hi";
import axios from "axios";

const FormDetailDataKaryawan = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDelete, setShowDelete] = useState(false);
  const [showPerubahanData, setShowPerubahanData] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setFormData({
          name: response.data.name,
          phone: response.data.phone,
          address: response.data.address?.street || "",
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [id]);

  const gantiData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Save = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, formData);
      setShowPerubahanData(false)
      navigate('/dataKaryawan')
      // alert("Data berhasil diperbarui!");
    } catch (error) {
      console.error("Error updating data", error);
    }
  };
  

  return (
    <div className="flex mt-8 h-[calc(100vh-12rem)] bg-gray-100 justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
            <input type="text" value={id} readOnly className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
            <input type="text" name="name" value={formData.name} onChange={gantiData} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi Market</label>
            <input type="text" value="SPM Daren" readOnly className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nomer Handphone</label>
            <input type="text" name="phone" value={formData.phone} onChange={gantiData} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
            <textarea name="address" value={formData.address} onChange={gantiData} className="w-full px-4 py-2 border border-gray-300 rounded-lg" rows="4"></textarea>
          </div>
          <div className="flex justify-between space-x-4 mt-6">
            <button type="button" className="px-10 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none mt-7" onClick={() => setShowDelete(true)}>
              Hapus Toko
            </button>
            <div className="flex space-x-4">
              <button onClick={() => navigate("/dataKaryawan")} type="button" className="px-10 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none mt-7">
                Kembali
              </button>
              <button type="button" onClick={() => setShowPerubahanData(true)} className="px-8 py-2 bg-[#A0AEC0] text-white rounded-lg focus:outline-none mt-7">
                Simpan Perubahan
              </button>
            </div>
          </div>
        </form>
      </div>
      {showDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="text-center flex flex-col items-center">
              <div className="text-red-500 text-6xl mb-2">
                <BiSolidTrash size={200} />
              </div>
              <h2 className="text-xl font-semibold">Apakah Anda Yakin?</h2>
              <p className="text-gray-600 text-sm mt-2">Semua informasi terkait karyawan tersebut akan dihapus secara permanen dari sistem. Mohon pastikan kembali sebelum melanjutkan.</p>
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={() => setShowDelete(false)} className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                Batal
              </button>
              <button onClick={() => setShowDelete(false)} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
      {showPerubahanData && (
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
              <button onClick={() => setShowPerubahanData(false)} className="px-6 py-2 bg-red-500 text-white rounded-lg">
                Tidak
              </button>
              <button onClick={Save} className="px-6 py-2 bg-blue-500 text-white rounded-lg">
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormDetailDataKaryawan;
