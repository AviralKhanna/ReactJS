import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../redux/slices/AuthSlice";
import { Button, Input, Logo } from "../components";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      // Mock authentication - Replace with real backend call
      if (data.email === "user@example.com" && data.password === "password123") {
        dispatch(authLogin({ email: data.email }));
        navigate("/");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('Images/WhatsApp Image 2024-10-13 at 17.18.01 copy.jpeg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/80"></div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md bg-white/90 p-8 rounded-lg shadow-lg backdrop-blur-lg">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Logo className="w-16 h-16" />
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign in to your account</h2>
        <p className="mt-2 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>

        {error && <p className="mt-4 text-center text-red-500">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-6 space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-all">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
