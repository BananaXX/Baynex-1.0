import React from 'react';

const activities = [
  { type: 'BUY', asset: 'Bitcoin', status: 'Completed' },
  { type: 'SELL', asset: 'Ethereum', status: 'Completed' },
  { type: 'SELL', asset: 'Tesla', status: 'Cancelled' },
];

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-4 mt-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">📝 Recent Activity</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="border-b border-gray-600 text-gray-400 uppercase">
            <tr>
              <th className="py-2 px-3">Type</th>
              <th className="py-2 px-3">Asset</th>
              <th className="py-2 px-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((item, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/40 transition">
                <td className="py-2 px-3">{item.type}</td>
                <td className="py-2 px-3">{item.asset}</td>
                <td
                  className={`py-2 px-3 font-semibold ${
                    item.status === 'Completed'
                      ? 'text-green-400'
                      : item.status === 'Cancelled'
                      ? 'text-red-400'
                      : 'text-yellow-400'
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityFeed;
