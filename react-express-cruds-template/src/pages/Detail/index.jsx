import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.scss";

const Detail = () => {
  // const [users, setUser] = useState([]);
  const [index, setIndex] = useState("");
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [check, setCheck] = useState("");
  // const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setIndex(response.data._id);
    setNama(response.data.nama);
    setHarga(response.data.harga);
    setStock(response.data.stock);
    setCheck(response.data.check);
  };

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>:{index}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>:{nama}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>:{harga}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>:{stock}</td>
          </tr>
          <tr>
            <td>Active</td>
            <td>:{check}</td>
          </tr>
          {/* {users.map((users, index) => (
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
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
