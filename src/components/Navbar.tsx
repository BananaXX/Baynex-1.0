import React from 'react';
import { FaHome, FaChartPie, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold tracking-wide">BAYNEX</div>
      <div className="flex gap-6 text-sm md:text-base">
        <button
          className="flex items-center gap-1 hover:text-yellow-400"
          onClick={() => navigate('/')}
        >
          <FaHome /> Overview
        </button>
        <button
          className="flex items-center gap-1 hover:text-yellow-400"
          onClick={() => navigate('/portfolio')}
        >
          <FaChartPie /> Portfolio
        </button>
        <button
          className="flex items-center gap-1 hover:text-yellow-400"
          onClick={() => navigate('/settings')}
        >
          <FaCog /> Settings
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
