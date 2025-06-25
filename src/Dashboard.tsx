import React from "react";

interface DashboardProps {
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <h1 className="text-4xl font-bold text-orange-500 mb-2">👋 Welcome to BAYNEX</h1>
      <p className="text-gray-300 mb-4">Hello, {user.email}</p>
      <p className="text-sm mb-6 text-gray-400 italic">
        God the creator of heaven and Earth is my provider. ISAIAH:35;1-10
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
          <p className="text-gray-400">Total Balance</p>
          <h2 className="text-3xl font-bold text-orange-400">$21,532</h2>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
          <p className="text-gray-400">Profit & Loss</p>
          <h2 className="text-3xl font-bold text-green-400">+$578</h2>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg text-center">
          <p className="text-orange-400 font-semibold text-lg mb-2">Baynex AI Assistant</p>
          <div className="w-20 h-20 mx-auto bg-orange-500 rounded-full mb-2 flex items-center justify-center text-2xl">🤖</div>
          <input
            className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-500 rounded outline-none"
            placeholder="How can I assist you today?"
          />
        </div>
      </div>

      <footer className="mt-10 text-center text-gray-600 text-xs">
        Built with guidance from AI using ChatGPT
      </footer>
    </div>
  );
};

export default Dashboard;
