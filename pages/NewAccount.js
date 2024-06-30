import React, { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../firebase"; // Verify correct path to firebase.js
import { collection, addDoc } from "firebase/firestore";
import Navbar from "../components/AdminNavbar"; // Adjusted import path
import Sidebar from "../components/AdminSidebar"; // Adjusted import path

const NewAccount = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("bankManager");

  const handleAddAccount = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        name,
        email,
        role,
        disabled: false,
      });
      alert("New account added successfully.");
      router.push("/adminLanding");
    } catch (error) {
      console.error("Error adding new account:", error);
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
        <div style={{ padding: "20px" }} className="container">
          <h1>Add New Account</h1>
          <form onSubmit={handleAddAccount}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="bankManager">Bank Manager</option>
                <option value="CA">Chartered Accountant</option>
                <option value="loanAgent">Loan Agent</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
