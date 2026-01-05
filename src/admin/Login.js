import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../App";
import "./Login.css";

const Login = () => {
  const [token, setToken] = useContext(Store);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const clearData = () => {
    setEmail("");
    setPassword("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://backendenergyticai.vercel.app/login", { email, password })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch(() => {
        alert("Login failed. Please check your credentials");
      });
  };

  useEffect(() => {
    if (token) {
      navigate("/admindashboard");
    }
  }, [token, navigate]);

  return (
    <main>
      <section className="login-title">
        <h1>Admin Login</h1>
      </section>

      <section className="login-form-section py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="login-card">
                <form onSubmit={submitHandler} className="login-form">
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

                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn-cancel"
                      onClick={clearData}
                    >
                      Cancel
                    </button>

                    <button type="submit" className="btn-login">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
