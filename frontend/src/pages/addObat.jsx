import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import axios from "axios";

const AddObat = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [tanggalExpired, setTanggalExpired] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/supplier");
      setSuppliers(response.data);
      //   console.log(suppliers);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token"); // Get the token from local storage
      const config = {
        headers: {
          "x-access-token": token, // Include the token in the request headers
        },
      };
      const formData = {
        nama_obat: event.target.nama_obat.value,
        gambar: event.target.gambar.value,
        jenis_obat: event.target.jenis_obat.value,
        stok_obat: parseInt(event.target.stok_obat.value),
        tanggal_exp: tanggalExpired,
        tipe_obat: event.target.tipe_obat.value,
        gambar_obat: event.target.gambar.value,
        harga_beli: parseInt(event.target.harga_beli.value),
        harga_jual: parseInt(event.target.harga_jual.value),
        id_supplier: selectedSupplier,
        sub_kategori: event.target.sub_kategori.value,
      };
      const response = await axios.post("http://localhost:5000/obat", formData, config);
      console.log("Data submitted:");
      console.log(response.data);

      // You can reset form fields or perform other actions after successful submission
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        const errorMessage = error.response.data.msg;
        setError(errorMessage);
        setTimeout(() => {
          setError("");
        }, 2000);
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        console.error("Error submitting data:", error);
      }
    }
  };

  const handleSupplierChange = (event) => {
    setSelectedSupplier(event.target.value);
  };
  const handleTanggalExpiredChange = (event) => {
    setTanggalExpired(event.target.value);
  };
  return (
    <div className=" justify-center items-center h-screen">
      <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Tambah Obat</h3>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama Obat
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Nama Obat...."
                required=""
                name="nama_obat"
              />
              {error && !error.includes("Wrong Password") && <p className="text-red-500 mt-1">{error}</p>}
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Obat</label>
              <select
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                name="jenis_obat"
              >
                <option> Non-Resep</option>
                <option> Resep</option>
              </select>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stok Obat</label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Tipe Obat..."
                name="stok_obat"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Expired</label>
              <input
                type="date"
                name="tanggal_expiredtanggal_expired"
                value={tanggalExpired}
                onChange={handleTanggalExpiredChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tipe Obat
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Tipe Obat..."
                name="tipe_obat"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gambar Obat</label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Gambar Obat jika ada...."
                name="gambar"
              />
            </div>
            <div>
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Harga Beli Supplier
              </label>
              <input
                type="number"
                name="harga_beli"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Rp 100,000"
                required=""
              />
            </div>
            <div>
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Harga Jual Konsumen
              </label>
              <input
                type="number"
                name="harga_jual"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Rp 100,000"
                required=""
              />
            </div>
            <div class="sm:col-span-2">
              <div>
                <label supplier class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Supplier
                </label>
                <select
                  id="category"
                  value={selectedSupplier}
                  onChange={handleSupplierChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  {suppliers.map((supplier) => (
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.nama}
                    </option>
                  ))}
                </select>
              </div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea
                name="sub_kategori"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write product description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 border-slate-200 text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  text-sm  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add new product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddObat;
