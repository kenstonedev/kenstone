import Image from 'next/image'; // If using Next.js, otherwise use regular img tag
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { VscBellDot } from 'react-icons/vsc';
import './Sidebar.module.css'; // Ensure this path is correct

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Image src="/dashboard.svg" alt="Dashboard Icon" width={40} height={40} />
      <div className="icon-container">
        <VscBellDot size={30} />
      </div>
      <div className="icon-container">
        <IoSettingsOutline size={30} />
      </div>
    </div>
  );
};

export default Sidebar;
