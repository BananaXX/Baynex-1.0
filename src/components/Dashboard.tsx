import React from 'react';
import Navbar from './Navbar';
import ActivityFeed from './ActivityFeed';
import ChartComponent from './ChartComponent';

interface Props {
  user: any;
}

const Dashboard: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-black text-white min-h-screen flex">
      <Navbar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">👋 Welcome to <span className="text-red-500">BAYNEX</span></h1>
          <p className="mt-2 text-sm text-gray-300">
            God the creator of heaven and Earth is my provider. ISAIAH:35;1-10
          </p>
        </div>

        <div className="mb-6 bg-gray-800 p-4 rounded-2xl shadow">
          <p>Hello, <span className="font-semibold text-blue-300">{user.email}</span></p>
          <p className="mt-2 text-2xl">Total Balance</p>
          <p className="text-3xl font-bold text-green-400">$21,532</p>
          <p className="mt-1 text-md text-gray-400">Profit & Loss</p>
          <p className="text-xl font-semibold text-emerald-500">+$578</p>
        </div>

        <div className="mb-6 bg-gray-800 p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2">Baynexa AI Assistant</h2>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🤖</span>
            <input
              type="text"
              placeholder="How can I assist you today?"
              className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <ChartComponent />
        <ActivityFeed />

        <footer className="mt-10 text-xs text-gray-500 text-center">
          Built with guidance from AI using ChatGPT
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
