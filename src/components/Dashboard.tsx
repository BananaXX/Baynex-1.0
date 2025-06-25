import React from "react";
import Navbar from "./Navbar";
import ChartComponent from "./ChartComponent";
import ActivityFeed from "./ActivityFeed";

interface DashboardProps {
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="flex bg-black text-white min-h-screen font-sans">
      {/* Sidebar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-orange-500">👋 Welcome to BAYNEX</h1>
          <p className="text-sm text-gray-400">God the creator of heaven and Earth is my provider. ISAIAH:35;1-10</p>
        </header>

        {/* User info */}
        <p className="text-gray-300 text-sm mb-6">Hello, {user.email}</p>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400">Total Balance</p>
            <h2 className="text-3xl font-bold text-orange-400">$21,532</h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400">Profit & Loss</p>
            <h2 className="text-3xl font-bold text-green-400">+$578</h2>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg text-center">
            <p className="text-orange-400 font-semibold text-lg mb-2">Baynexa AI Assistant</p>
            <div className="w-20 h-20 mx-auto bg-orange-500 rounded-full mb-2 flex items-center justify-center text-2xl">🤖</div>
            <input
              className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-500 rounded outline-none"
              placeholder="How can I assist you today?"
            />
          </div>
        </div>

        {/* Chart + Activity */}
        <div className="grid gap-6 md:grid-cols-2">
          <ChartComponent />
          <ActivityFeed />
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-gray-600 text-xs">
          Built with guidance from AI using ChatGPT
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
