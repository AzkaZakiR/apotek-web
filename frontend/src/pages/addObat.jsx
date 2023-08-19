import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import axios from "axios";

const AddObat = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [tanggalExpired, setTanggalExpired] = useState("");

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/supplier");
      setSuppliers(response.data);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        nama_obat: event.target.nama_obat.value,
        gambar: event.target.gambar.value,
        jenis_obat: event.target.jenis_obat.value,
        stok_obat: event.target.stok_obat.value,
        tanggal_expired: tanggalExpired,
        tipe_obat: event.target.tipe_obat.value,
        gambar_obat: event.target.gambar_obat.value,
        harga_beli: event.target.harga_beli.value,
        harga_jual: event.target.harga_jual.value,
        id_supplier: selectedSupplier,
        sub_kategori: event.target.sub_kategori.value,
      };

      const response = await axios.post("http://localhost:5000/obat", formData);
      console.log("Data submitted:", response.data);

      // You can reset form fields or perform other actions after successful submission
    } catch (error) {
      console.error("Error submitting data:", error);
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
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form action="#">
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama Obat
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Nama Obat...."
                required=""
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Obat</label>
              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
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
                required=""
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gambar Obat</label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Gambar Obat jika ada...."
                required=""
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
                id="price"
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
            class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
            </svg>
            Add new product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddObat;
