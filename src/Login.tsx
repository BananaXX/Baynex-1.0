
import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
      alert("Login failed: " + e.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Login to BAYNEX</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 rounded bg-gray-800 text-white"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 rounded bg-gray-800 text-white"
      />
      <button onClick={handleLogin} className="bg-orange-600 px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}
