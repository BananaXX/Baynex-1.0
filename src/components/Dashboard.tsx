// 🌐 Folder: src/components/Dashboard.tsx import React from 'react'; import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [ { name: 'Mon', value: 18000 }, { name: 'Tue', value: 19000 }, { name: 'Wed', value: 20000 }, { name: 'Thu', value: 21000 }, { name: 'Fri', value: 21532 }, ];

const Dashboard: React.FC = () => { return ( <div className="min-h-screen bg-black text-white p-6 font-sans"> <header className="text-center text-sm mb-4 tracking-wide"> <p className="text-orange-500 uppercase">God the creator of heaven and Earth is my provider. ISAIAH:35:1-10</p> </header>

<div className="text-3xl font-bold text-orange-500">BAYNEX <span className="text-gray-300">Dashboard</span></div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl">
      <p className="text-gray-400">Total Balance</p>
      <h2 className="text-3xl font-bold text-orange-400">$21,532</h2>
    </div>

    <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl">
      <p className="text-gray-400">Profit &amp; Loss</p>
      <h2 className="text-3xl font-bold text-green-400">+$578</h2>
    </div>

    <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl col-span-1 md:col-span-2">
      <p className="text-gray-400 mb-2">Performance</p>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl">
      <p className="text-gray-400 mb-2">Baynexa AI Assistant</p>
      <div className="flex items-center space-x-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
          alt="Baynexa AI"
          className="w-16 h-16 rounded-full border border-orange-500"
        />
        <div>
          <p className="text-sm text-gray-400">How can I assist you today?</p>
          <input
            type="text"
            placeholder="Type a message..."
            className="mt-1 px-2 py-1 w-full bg-zinc-800 text-white rounded-md text-sm"
          />
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl">
      <p className="text-gray-400 mb-2">Recent Activity</p>
      <table className="w-full text-sm text-left">
        <thead className="text-gray-500">
          <tr>
            <th>Type</th>
            <th>Asset</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          <tr>
            <td className="py-1">BUY</td>
            <td>Bitcoin</td>
            <td className="text-green-400">Completed</td>
          </tr>
          <tr>
            <td>SELL</td>
            <td>Ethereum</td>
            <td className="text-green-400">Completed</td>
          </tr>
          <tr>
            <td>SELL</td>
            <td>Tesla</td>
            <td className="text-red-500">Cancelled</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <footer className="text-center text-xs text-gray-600 mt-8">
    Built with guidance from AI using ChatGPT
  </footer>
</div>

); };

export default Dashboard;

