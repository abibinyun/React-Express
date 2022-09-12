import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";

const Edit = () => {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [check, setCheck] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNama(response.data.nama);
    setHarga(response.data.harga);
    setStock(response.data.stock);
    setCheck(response.data.check);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
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
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={updateUser}>
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

export default Edit;
