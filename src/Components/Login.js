/** @format */

import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const Login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <>
      <h1>Login</h1>
      <br />
      <input type="text" />
      <br />
      <br />
      <input type="text" />
      <br />
      <br />

      <button onClick={Login}>Login</button>
    </>
  );
};

export default Login;
