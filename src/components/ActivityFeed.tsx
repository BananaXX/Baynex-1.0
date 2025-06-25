import React from "react";

const ActivityFeed: React.FC = () => {
  const activity = [
    { type: "BUY", asset: "Bitcoin", status: "Completed" },
    { type: "SELL", asset: "Ethereum", status: "Completed" },
    { type: "SELL", asset: "Tesia", status: "Cancelled" },
  ];

  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg w-full">
      <h2 className="text-lg font-semibold text-gray-300 mb-4">📝 Recent Activity</h2>
      <div className="text-sm text-gray-400 grid grid-cols-3 font-bold border-b border-gray-700 pb-2">
        <div>TYPE</div>
        <div>ASSET</div>
        <div>STATUS</div>
      </div>
      {activity.map((item, idx) => (
        <div key={idx} className="grid grid-cols-3 text-sm py-2 border-b border-gray-800 text-white">
          <div className={`${item.type === "BUY" ? "text-green-400" : "text-red-400"}`}>
            {item.type}
          </div>
          <div>{item.asset}</div>
          <div className={item.status === "Completed" ? "text-green-400" : "text-red-400"}>
            {item.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
