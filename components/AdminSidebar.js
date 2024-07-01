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
          href="/admin-dashboard"
          className={`nav-link text-dark d-flex align-items-center ${
            activeLink === "home" ? "text-primary" : ""
          }`}
          onClick={() => handleSetActiveLink("home")}
        >
          <FaHome style={{ fontSize: "24px", marginRight: "10px" }} />
          <span>Home</span>
        </Link>
        <Link
          href="/BankManagers"
          className={`nav-link text-dark d-flex align-items-center ${
            activeLink === "managers" ? "text-primary" : ""
          }`}
          onClick={() => handleSetActiveLink("managers")}
        >
          <FaUser style={{ fontSize: "24px", marginRight: "10px" }} />
          <span>Managers</span>
        </Link>
        <Link
          href="/ClientListinAdmin"
          className={`nav-link text-dark d-flex align-items-center ${
            activeLink === "clients" ? "text-primary" : ""
          }`}
          onClick={() => handleSetActiveLink("clients")}
        >
          <FaCog style={{ fontSize: "24px", marginRight: "10px" }} />
          <span>Clients</span>
        </Link>
        {/* <Link
          href="/profile-settings"
          className={`nav-link text-dark d-flex align-items-center ${
            activeLink === "settings" ? "text-primary" : ""
          }`}
          onClick={() => handleSetActiveLink("settings")}
        >
          <FaCog style={{ fontSize: "24px", marginRight: "10px" }} />
          <span>Profile Settings</span>
        </Link> */}
      </nav>
    </div>
  );
};

export default Sidebar;
