// index.tsx

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      alert("Login failed: " + err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Login to BAYNEX</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="mb-2 p-2 rounded bg-gray-800 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="mb-4 p-2 rounded bg-gray-800 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-orange-600 px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <Dashboard balance={balance} />
      <div className="text-center mt-6">
        <button
          onClick={handleLogout}
          className="text-sm underline text-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
