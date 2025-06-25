import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', balance: 18000 },
  { name: 'Tue', balance: 19500 },
  { name: 'Wed', balance: 20500 },
  { name: 'Thu', balance: 21000 },
  { name: 'Fri', balance: 21532 },
];

const ChartComponent: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-2xl shadow-lg mt-6">
      <h2 className="text-lg font-semibold mb-4">📊 Weekly Performance</h2>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#444' }} />
          <Line type="monotone" dataKey="balance" stroke="#f97316" strokeWidth={2.5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
