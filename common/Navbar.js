import Image from 'next/image'; // If you are using Next.js, otherwise use regular img tag
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import './Navbar.module.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Image src="/kenstone-logo.png" alt="Kenstone logo" width={50} height={50} />
        <div className="navbar-title">Admin</div>
      </div>
      <div className="navbar-right">
        <IoSearch size={30} className="navbar-search-icon" />
      </div>
    </div>
  );
};

export default Navbar;
