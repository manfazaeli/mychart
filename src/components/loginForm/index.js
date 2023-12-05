"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
 

  const  handleSubmit = async  (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "post",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.status != 200 ? alert('نام کاربری یا رمز اشتباه است') :(window.location='/home')
    console.log(res.status);
  };

  return (
    <form
      className=" bg-slate-300 my-10 max-w-[18rem] mx-auto flex flex-col px-5 py-5 rounded-md shadow-lg"
      onSubmit={handleSubmit}
    >
      <label className="block text-blue-800 text-sm font-bold mb-0" >
        Username
      </label>
      <input
        className=" rounded-lg  px-2"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />

      <label className="block text-blue-800 text-sm font-bold mb-0">
        Password
      </label>
      <input
        className=" rounded-lg px-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />

      <button className=" bg-[#FFCC70] text-blue-800 " type="submit">ورود </button>
    </form>
  );
};

export default LoginForm;
