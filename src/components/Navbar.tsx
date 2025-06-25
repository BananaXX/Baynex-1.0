import React from "react";
import { FaHome, FaChartPie, FaCog } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <aside className="w-full md:w-64 bg-gray-900 text-white h-screen p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold text-orange-500 mb-8">BAYNEX</h2>
        <nav className="space-y-4">
          <NavItem icon={<FaHome />} label="Overview" />
          <NavItem icon={<FaChartPie />} label="Portfolio" />
          <NavItem icon={<FaCog />} label="Settings" />
        </nav>
      </div>
      <p className="text-xs text-orange-400 mt-10 italic">
        God the creator of heaven and Earth is my provider. ISAIAH:35;1-10
      </p>
    </aside>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-3 text-gray-300 hover:text-orange-400 cursor-pointer">
    <div className="text-lg">{icon}</div>
    <span className="text-sm">{label}</span>
  </div>
);

export default Navbar;
