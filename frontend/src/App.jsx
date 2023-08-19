import React from "react";
//import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/dashBoard";
import Obatlist from "./pages/obatList";
import AddObat from "./pages/addObat";
import Loginpage from "./pages/login";
import Loginbaru from "./pages/newLogin";

export default function App() {
  return (
    // <div className="app">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/obat" element={<Obatlist />} />
    //       <Route path="/login" element={<Loginpage />} />
    //       <Route path="/masuk" element={<Loginbaru />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="products" element={<Products />} /> */}
          {/* <Route path="products" element={<ProductList />} /> */}
          {/* <Route path="add" element={<AddProduct />} /> */}
          {/* <Route path="edit/:id" element={<EditProduct />} /> */}
          <Route path="addObat" element={<AddObat />} />
        </Route>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/masuk" element={<Loginbaru />} />
        <Route path="/tambah" element={<AddObat />} />
      </Routes>
    </Router>
  );
}
