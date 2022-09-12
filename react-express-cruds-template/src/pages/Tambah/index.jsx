import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import "./index.scss";

const Tambah = () => {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [check, setCheck] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nama,
        harga,
        stock,
        check,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={saveUser}>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
          <Input name="status" type="checkbox" label="Active" checked={check} onChange={(e) => setCheck(e.target.checked)} />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;
