import React, { useState } from "react";
import axios from "axios";

const CrudPost = () => {
  const [coursename, setCoursename] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");

  const addOfferData = (e) => {
    e.preventDefault();
    axios
      .post("https://backendenergyticai.vercel.app/crud", {
        coursename,
        description,
        instructor,
      })
      .then(() => {
        alert("Data Added Successfully");
        setCoursename("");
        setDescription("");
        setInstructor("");
      })
      .catch(() => {
        alert("Error while adding data");
      });
  };

  const pageStyle = {
    backgroundColor: "#f9fafb",
    paddingBottom: "50px",
  };

  const titleStyle = {
    fontSize: "1.7rem",
    fontWeight: "600",
    color: "#111827",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
  };

  const cardHeaderStyle = {
    background: "linear-gradient(135deg, #f1f5f9, #e5e7eb)",
    padding: "16px",
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
  };

  const cardBodyStyle = {
    padding: "26px",
  };

  const inputStyle = {
    height: "46px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "0.95rem",
  };

  const buttonStyle = {
    width: "100%",
    height: "46px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    border: "none",
    color: "#ffffff",
    fontWeight: "600",
    letterSpacing: "0.4px",
    cursor: "pointer",
  };

  return (
    <main style={pageStyle}>
      <section>
        <div className="container bg-light">
          <div className="row">
            <div className="col-12 text-center py-4">
              <h1 style={titleStyle}>Add Course Data</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-4 mx-auto">
              <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                  Course Information
                </div>

                <div style={cardBodyStyle}>
                  <form onSubmit={addOfferData}>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Course Name"
                        className="form-control"
                        style={inputStyle}
                        value={coursename}
                        onChange={(e) => setCoursename(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Description"
                        className="form-control"
                        style={inputStyle}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Instructor"
                        className="form-control"
                        style={inputStyle}
                        value={instructor}
                        onChange={(e) => setInstructor(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mt-4">
                      <button type="submit" style={buttonStyle}>
                        Add Data
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CrudPost;
