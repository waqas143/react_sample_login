import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useTranslation } from "react-i18next";

async function loginUser(credentials) {
  let response;
  try {
    response = await axios({
      method: "post",
      url: "http://localhost:5001/api/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(credentials),
    });
    response = response.data;
  } catch (error) {
    response = error.response.data;
  }
  return response;
}

export const LoginPage = () => {
  const { t, i18n } = useTranslation();
  const nagivate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({ email, password });
    if ("accessToken" in response) {
      new MySwal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        localStorage.setItem("email", JSON.stringify(response["email"]));
        nagivate("/dashboard");
      });
    } else {
      new MySwal("Failed", response.message, "error");
    }
  };

  const token = localStorage.getItem("accessToken");

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>{t("enter your email")}</label>
            <input
              id="email"
              type="email"
              className="form-control mt-1"
              placeholder={t("enter your email")}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>{t("enter your password")}</label>
            <input
              id="password"
              type="password"
              className="form-control mt-1"
              placeholder={t("enter your password")}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="row">
            <div className="col-lg-6 .col-md-6 text-left">
              <p className="forgot-password mt-2">
                <Link to="/forget">Forgot password?</Link>
              </p>
            </div>
            <div className="col-lg-6 .col-md-6 text-left">
              <p className="signup text-end mt-2">
                <Link to="/register">Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
