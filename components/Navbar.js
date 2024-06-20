import React from "react";

const Navbar = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light">
      <h1>Dashboard</h1>
      <div>
        <button className="btn btn-primary mr-3">Add New</button>
        <img
          src="/profile-user.png"
          alt="User"
          className="rounded-circle"
          width="50"
          height="50"
        />
      </div>
    </header>
  );
};

export default Navbar;
