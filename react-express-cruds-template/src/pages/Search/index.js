import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [users, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?term=${searchTerm}`);
    setSearchTerm("");
  };

  useEffect(() => {
    getUsersBySearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsersBySearch = async () => {
    const response = await axios.get(`http://localhost:5000/search?term=${searchTerm}`);
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsersBySearch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tamah Produk
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input type="text" placeholder="Masukan kata kunci..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={users._id}>
              <td>{index + 1}</td>
              <td>{users.nama}</td>
              <td className="text-right">{users.harga}</td>
              <td className="text-center">
                <Link to={`detail/${users._id}`} className="btn btn-sm btn-info">
                  Detail
                </Link>
                <Link to={`edit/${users._id}`} className="btn btn-sm btn-warning">
                  Edit
                </Link>
                <button onClick={() => deleteUser(users._id)} className="btn btn-sm btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
