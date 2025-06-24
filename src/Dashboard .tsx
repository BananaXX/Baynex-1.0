// Dashboard.tsx

import React from "react";

const Dashboard = ({ balance }: { balance: number }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">BAYNEX Dashboard</h1>
      <p className="text-xl mb-2">
        💰 Current Balance: <span className="text-green-400">${balance}</span>
      </p>
      <p className="mt-6 italic text-orange-400">
        “God the creator of heaven and Earth is my provider. ISAIAH:35;1-10”
      </p>
      <footer className="text-sm mt-8 text-gray-500">
        Built with guidance from AI using ChatGPT
      </footer>
    </div>
  );
};

export default Dashboard;
