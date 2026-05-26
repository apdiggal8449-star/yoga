import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/admin-login",
        {
          email,
          password,
        }
      );

      console.log(res.data);

      // SAVE TOKEN

      if (res.data.token) {

        localStorage.setItem(
          "token",
          res.data.token
        );

        localStorage.setItem(
          "role",
          res.data.role
        );

        alert("Login Successful");

        // REDIRECT
        navigate("/admin/dashboard");
      }

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5"
      >

        <h1 className="text-3xl font-bold text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded-xl outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded-xl outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600"
        >

          {loading
            ? "Logging in..."
            : "Login"}

        </button>

      </form>

    </div>
  );
};

export default AdminLogin;