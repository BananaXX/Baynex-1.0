import React from 'react';

const Dashboard: React.FC<{ user: any }> = ({ user }) => {
  return (
    <div className="min-h-screen bg-secondary text-white font-inter p-4">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-primary">BAYNEX</h1>
        <p className="text-sm mt-1">
          God the creator of heaven and Earth is my provider. ISAIAH:35;1-10
        </p>
      </header>

      {/* Welcome & User Info */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">👋 Welcome to BAYNEX</h2>
        <p className="mt-1">Hello, <span className="text-primary">{user.email}</span></p>
      </section>

      {/* Balance and P&L */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-black bg-opacity-20 p-4 rounded-xl shadow-md">
          <h3 className="text-lg text-gray-300">Total Balance</h3>
          <p className="text-3xl font-bold text-green-400">$21,532</p>
        </div>
        <div className="bg-black bg-opacity-20 p-4 rounded-xl shadow-md">
          <h3 className="text-lg text-gray-300">Profit & Loss</h3>
          <p className="text-3xl font-bold text-blue-400">+$578</p>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="mb-6">
        <h3 className="text-xl font-medium mb-2">Baynexa AI Assistant 🤖</h3>
        <input
          className="w-full p-2 rounded-lg border border-gray-700 bg-black text-white focus:outline-none"
          placeholder="How can I assist you today?"
        />
      </section>

      {/* Performance */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">📊 Performance</h3>
        {/* Placeholder chart or data */}
        <div className="p-4 bg-black bg-opacity-10 rounded-lg">[Performance Chart Placeholder]</div>
      </section>

      {/* Recent Activity */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">📝 Recent Activity</h3>
        <div className="overflow-x-auto text-sm">
          <table className="w-full table-auto border-collapse border border-gray-700">
            <thead className="bg-primary text-black">
              <tr>
                <th className="border border-gray-700 p-2">TYPE</th>
                <th className="border border-gray-700 p-2">ASSET</th>
                <th className="border border-gray-700 p-2">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">BUY</td>
                <td className="border border-gray-700 p-2">Bitcoin</td>
                <td className="border border-gray-700 p-2">Completed</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">SELL</td>
                <td className="border border-gray-700 p-2">Ethereum</td>
                <td className="border border-gray-700 p-2">Completed</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">SELL</td>
                <td className="border border-gray-700 p-2">Tesla</td>
                <td className="border border-gray-700 p-2">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-xs text-gray-500 mt-8 text-center">
        Built with guidance from AI using ChatGPT
      </footer>
    </div>
  );
};

export default Dashboard;
