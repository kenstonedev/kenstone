// components/Sidebar.js
import React from "react";
import { FaUser, FaCog, FaHome } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div
      className="bg-light d-flex flex-column align-items-center p-3"
      style={{ width: "250px", height: "100vh" }}
    >
      <div className="mb-4">
        <img src="/logo.png" alt="Logo" width="50" height="50" />
      </div>
      <nav className="nav flex-column w-100">
        <Link href="/">
          {/* <a className="nav-link text-dark"> */}
            <FaHome /> Dashboard
          {/* </a> */}
        </Link>
        <Link href="/">
          {/* <a className="nav-link text-dark"> */}
            <FaUser /> Client List
          {/* </a> */}
        </Link>
        <Link href="/">
          {/* <a className="nav-link text-dark"> */}
            <FaCog /> Settings
          {/* </a> */}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
