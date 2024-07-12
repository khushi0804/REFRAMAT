import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylelogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/auth/adminlogin", values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded border loginForm">
        <div className="text-warning">{error && error}</div>
        <h2 className="hh mb-4">Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2" htmlFor="email">
              <strong className="head">Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-5">
            <label className="mb-2" htmlFor="password">
              <strong className="head">Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button className="btn  btn-primary w-100 rounded-0 ">Submit</button>

          <div className="check d-flex gap-3">
            <input type="checkbox" name="checkbox" />
            Are you agree with Terms and Conditions
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
