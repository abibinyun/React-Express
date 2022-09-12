import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.scss";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  const [filter, setFilter] = useState("");

  // const navigate = useNavigate();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const searchText = (e) => {
    setFilter(e.target.value);
  };

  let dataSearch = users.filter((item) => {
    return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()));
  });

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tamah Produk
      </Link>

      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." value={filter} onChange={(e) => searchText(e)} />
      </div>

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
          {dataSearch.map((users, index) => (
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

export default Home;
