import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import registerImg from "../images/register.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const adminRegister = (e) => {
    e.preventDefault();

    axios
      .post("https://backendenergyticai.vercel.app/register", {
        name,
        email,
        password,
      })
      .then(() => {
        alert("Admin registered successfully");
        navigate("/login");
      })
      .catch(() => {
        alert("Error registering admin");
      });
  };

  return (
    <main>
   
      <section className="register-title text-center">
        <h1>Admin Register</h1>
      </section>

     
      <section className="register-section py-5">
        <div className="container">
          <div className="row align-items-center">

        
            <div className="col-md-6 text-center d-none d-md-block">
              <img
                src={registerImg}
                alt="Register Illustration"
                className="register-image"
              />
            </div>

         
            <div className="col-md-6">
              <div className="register-card mx-auto">
                <form onSubmit={adminRegister} className="register-form">
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-submit w-100">
                    Register Admin
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
