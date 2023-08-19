import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import { Button } from "flowbite-react";

// import { deleteProduct } from '../../../backend/controllers/ProductsController';

const Obatlist = () => {
  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/obat");
    return response.data.response;
  };

  //   const deleteProduct = async (productId) => {
  //     await axios.delete(`http://localhost:5000/products/${productId}`);
  //     mutate("products");
  //   };
  // check = typeof()
  const { data } = useSWR("products", fetcher);
  console.log("Type data: ");
  console.log(typeof data);
  console.log(data);
  if (!data) return <h2>Loading....</h2>;

  return (
    <div className="flex flex-col mt-5 mr-4">
      <div className="w-full ">
        <div className="w-full text-right">
          {" "}
          {/* Add text-right class here */}
          <Link to="/addObat" className="bg-green-500 hover:bg-green-700 border-slate-200 text-white font-bold py-2 px-4 rounded-lg mr-4">
            Add New
          </Link>
        </div>
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6 ">Product Name</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Gambar</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr className="bg-white border-b" key={product.id}>
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">{product.nama_obat} </td>
                  <td className="py-3 px-6">{product.stok_obat}</td>
                  <td className="py-3 px-6">
                    <img src={product.gambar} class="w-20" />{" "}
                  </td>
                  <td className="py-3 px-1 text-center">
                    <Link to={`/edit/${product.id}`} className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1">
                      Edit
                    </Link>
                    {/* <button onClick={() => deleteProduct(product.id)} className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white">
                      Delete{" "}
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Obatlist;
