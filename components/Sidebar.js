import React, { useState } from "react";
import { FaUser, FaCog, FaHome } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div
      className="bg-light d-flex flex-column align-items-center p-3"
      style={{ width: "12vw", height: "100vh" }}
    >
      <div className="mb-4">
        <Image src="/kenstone-logo.png" alt="Logo" width="50" height="50" />
      </div>
      <nav className="nav flex-column w-100">
        <Link
          href="/dashboard"
          className={`nav-link text-dark d-flex align-items-center ${
            activeLink === "dashboard" ? "text-primary" : ""
          }`}
          onClick={() => handleSetActiveLink("dashboard")}
        >
          <FaHome style={{ fontSize: "24px", marginRight: "10px" }} />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/bank-managers"
          className={`nav-link text-dark d-flex align-items-center ${
            activeLink === "clientList" ? "text-primary" : ""
          }`}
          onClick={() => handleSetActiveLink("clientList")}
        >
          <FaUser style={{ fontSize: "24px", marginRight: "10px" }} />
          <span>Client List</span>
        </Link>
        <Link
          href="/"
          className={`nav-link text-dark d-flex align-items-center ${
            activeLink === "settings" ? "text-primary" : ""
          }`}
          onClick={() => handleSetActiveLink("settings")}
        >
            <FaCog style={{ fontSize: "24px", marginRight: "10px" }} />
            <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
