// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with actual backend signup API
    console.log("Signing up:", form);
    alert("Account created!");
    navigate("/jobs");
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white dark:bg-gray-800 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={form.name}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          required
        />
        <button className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded">
          Sign Up
        </button>
      </form>

      <p className="mt-4 items-center flex justify-center gap-2">Already have an account? <Link to="/login" className="text-green-600 hover:underline">Login</Link></p>
    </div>
  );
};

export default Signup;
