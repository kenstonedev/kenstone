import React from "react";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link'
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light">
      <h1>Dashboard</h1>
      <div>
        <Link href="/NewAccount">
          <button className="btn btn-primary mr-3">Add New</button>
        </Link>
        <FaSearch style={{ margin: "30" }}></FaSearch>
        {/* <Link href="/profile-page">
          <Image
            src="/profile-user.png"
            alt="User"
            className="rounded-circle"
            width="30"
            height="30"
          /> */}
        {/* </Link> */}
      </div>
    </header>
  );
};

export default Navbar;
