import React from "react";

interface DashboardProps {
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4">👋 Welcome to BAYNEX</h1>
      <p className="text-lg mb-2">Hello, {user.email}</p>
      <p className="text-sm italic">God the creator of heaven and Earth is my provider. ISAIAH:35;1-10</p>
      <footer className="mt-8 text-xs text-gray-400">
        Built with guidance from AI using ChatGPT
      </footer>
    </div>
  );
};

export default Dashboard;
