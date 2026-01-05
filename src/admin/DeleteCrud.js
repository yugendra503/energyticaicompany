
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const DeleteCrud = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendenergyticai.vercel.app/crud")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert("Error fetching Data");
      });
  }, []);

  const deleteOfferData = async (id) => {
    if (!window.confirm("Are you sure you want to delete this Data?")) return;

    try {
      await axios.delete(`http://localhost:4000/crud/${id}`);
      setData((prev) => prev.filter((item) => item._id !== id));
      alert("Data deleted successfully");
    } catch {
      alert("Error deleting Data");
    }
  };

  return (
    <main className="container">
      <h3 className="m text-center">Manage Data</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark text-center">
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Instructor</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.coursename}</td>
                <td>{item.description}</td>
                <td>{item.instructor}</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center gap-2">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteOfferData(item._id)}
                    >
                      Delete
                    </button>

                    <NavLink
                      to={`/editcrud/${item._id}`}
                      className="btn btn-primary btn-sm text-decoration-none"
                    >
                      Edit
                    </NavLink>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DeleteCrud;
