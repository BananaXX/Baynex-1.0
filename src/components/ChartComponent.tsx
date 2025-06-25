import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 2600 },
  { name: 'Mar', value: 2900 },
  { name: 'Apr', value: 2800 },
  { name: 'May', value: 3200 },
  { name: 'Jun', value: 3700 },
];

const ChartComponent: React.FC = () => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg w-full h-64">
      <h2 className="text-lg font-semibold text-gray-300 mb-4">📈 Performance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
