import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import axios from "axios";

const Transaction = () => {
  const [dynamicInputs, setDynamicInputs] = useState([{ obatId: "", jumlah: "" }]);
  const [selectedObat, setSelectedObat] = useState("");
  const [selectedObatPrice, setSelectedObatPrice] = useState(0); // Initialize with a default value

  const [obat, setObat] = useState([]);
  const [selectedPelanggan, setselectedPelanggan] = useState("");
  const [pelanggan, setPelanggan] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchObats();
  }, []);

  useEffect(() => {
    fetchPelanggan();
  }, []);
  const fetchObats = async () => {
    try {
      const response = await axios.get("http://localhost:5000/obat");
      setObat(response.data);
    } catch (error) {
      console.error("Error fetch ing suppliers:", error);
    }
  };

  const fetchPelanggan = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pelanggan");
      setPelanggan(response.data);
      console.log(pelanggan);
    } catch (error) {
      console.error("Error fetch ing suppliers:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token"); // Get the token from local storage
      const config = {
        headers: {
          "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFwb3Rla2VyLTAxIiwiaWF0IjoxNjkyNDU4NjQxLCJleHAiOjE2OTI0NzY2NDF9.Tx5CAJdcXntaRbtK9B96G73B6fAu1_EfZM2ULWJWdc4", // Include the token in the request headers
        },
      };
      const formData = {
        id_obat: selectedObat,
        jumlah_beli: parseInt(event.target.jumlah.value),
        harga_obat: selectedObatPrice,
      };

      const apiData = {
        "medicines": [formData],
        "id_pelanggan": selectedPelanggan,
      };
      console.log("obat yg dipilih");
      console.log(selectedObat);
      console.log(apiData);
      const response = await axios.post("http://localhost:5000/pembelian", apiData, config);
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

  const handleDynamicInputChange = (index, fieldName, fieldValue) => {
    const updatedInputs = [...dynamicInputs];
    updatedInputs[index] = { ...updatedInputs[index], [fieldName]: fieldValue };
    setDynamicInputs(updatedInputs);
  };

  const addDynamicInput = () => {
    if (dynamicInputs.length < 5) {
      setDynamicInputs([...dynamicInputs, { obatId: "", jumlah: "" }]);
    }
  };

  const removeDynamicInput = (index) => {
    const updatedInputs = dynamicInputs.filter((_, i) => i !== index);
    setDynamicInputs(updatedInputs);
  };
  const handleObatChange = (event) => {
    const selectedObatId = event.target.value;
    setSelectedObat(selectedObatId);

    // Find the selected medicine from the 'obat' array
    const selectedMedicine = obat.find((oba) => oba.id === selectedObatId);

    if (selectedMedicine) {
      setSelectedObatPrice(selectedMedicine.harga_jual); // Replace 'price' with the actual property name
    } else {
      setSelectedObatPrice(0); // Reset the price if the selected medicine is not found
    }
  };

  const handlePelangganChange = (event) => {
    setselectedPelanggan(event.target.value);
  };
  return (
    <div className=" justify-center items-center h-screen">
      <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Bikin Transaksi</h3>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama Obat
              </label>
              <select
                id="category"
                value={selectedObat}
                onChange={handleObatChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {obat.map((oba) => (
                  <option key={oba.id} value={oba.id}>
                    {oba.nama_obat}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-gray-600">Harga: Rp.{selectedObatPrice}</p>
              {error && !error.includes("Wrong Password") && <p className="text-red-500 mt-1">{error}</p>}
            </div>
            <div>
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                jumlah
              </label>
              <input
                type="number"
                name="jumlah"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Pelanggan</label>

              <select
                id="category"
                value={selectedPelanggan}
                onChange={handlePelangganChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {pelanggan.map((plg) => (
                  <option key={plg.id} value={plg.id}>
                    {plg.nama}
                  </option>
                ))}
              </select>
              {error && !error.includes("Wrong Password") && <p className="text-red-500 mt-1">{error}</p>}
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

export default Transaction;
