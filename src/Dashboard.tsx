import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { connectWebSocket, getBalance } from "./websocket";
import baynexa from "./baynexa";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const ws = connectWebSocket();
    ws.on("message", (data) => {
      const msg = JSON.parse(data.toString());
      if (msg.msg_type === "balance") {
        setBalance(msg.balance.balance);
        baynexa.say(`Balance updated: $${msg.balance.balance}`);
      }
    });
    getBalance();
    return () => ws.close();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">BAYNEX Dashboard</h1>
      <p className="text-xl mb-2">💰 Current Balance: <span className="text-green-400">${balance}</span></p>
      <p className="mt-6 italic text-orange-400">“God the creator of heaven and Earth is my provider. ISAIAH:35;1-10”</p>
      <footer className="text-sm mt-8 text-gray-500">Built with guidance from AI using ChatGPT</footer>
      <button onClick={() => signOut(auth)} className="mt-6 underline text-red-400">Logout</button>
    </div>
  );
}
