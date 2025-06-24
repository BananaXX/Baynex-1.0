// src/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import { connectWebSocket, getBalance } from "./websocket";
import baynexa from "./baynexa";

const Dashboard: React.FC<{ user: any }> = ({ user }) => {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const ws = connectWebSocket();

    ws.on("message", (data: string) => {
      const msg = JSON.parse(data.toString());
      if (msg.msg_type === "balance") {
        const b = msg.balance?.balance ?? 0;
        setBalance(b);
        baynexa.say(`💰 Balance: $${b}`);
      }
    });

    getBalance();

    return () => ws.close();
  }, []);

  const logout = async () => {
    await signOut(getAuth());
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">BAYNEX Dashboard</h1>
      <p className="text-xl mb-2">
        Logged in as: <span className="text-blue-400">{user.email}</span>
      </p>
      <p className="text-xl mb-2">
        💰 Balance: <span className="text-green-400">${balance}</span>
      </p>
      <p className="mt-6 italic text-orange-400">
        “God the creator of heaven and Earth is my provider. ISAIAH:35;1-10”
      </p>
      <footer className="text-sm mt-8 text-gray-500">
        Built with guidance from AI using ChatGPT
      </footer>
      <button onClick={logout} className="mt-6 underline text-red-400">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
